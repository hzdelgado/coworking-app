// src/app/modules/user/components/explore-availability/explore-availability.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllBookings, selectLoading } from '../../../../store/selectors/bookings.selectors';
import * as BookingActions from '../../../../store/actions/bookings.actions';

@Component({
  selector: 'app-explore-availability',
  template: `
    <div class="availability-container">
      <mat-toolbar color="primary">
        <span>{{ 'NAV.EXPLORE' | translate }}</span>
      </mat-toolbar>

      <form [formGroup]="filtersForm" class="filters" (ngSubmit)="applyFilters()">
        <mat-form-field appearance="fill">
          <mat-label>{{ 'FILTER.LOCATION' | translate }}</mat-label>
          <input matInput formControlName="location" placeholder="Ej: Lima">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>{{ 'FILTER.DATE' | translate }}</mat-label>
          <input matInput [matDatepicker]="picker" formControlName="date">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>{{ 'FILTER.TYPE' | translate }}</mat-label>
          <mat-select formControlName="type">
            <mat-option *ngFor="let type of spaceTypes" [value]="type">
              {{ type | translate }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <button mat-raised-button color="accent" type="submit">
          {{ 'FILTER.APPLY' | translate }}
        </button>
      </form>

      <div *ngIf="loading$ | async" class="loading">
        <mat-spinner></mat-spinner>
      </div>

      <mat-grid-list cols="3" rowHeight="2:1" *ngIf="!(loading$ | async)">
        <mat-grid-tile
          *ngFor="let booking of filteredBookings$ | async"
          class="space-card"
        >
          <mat-card>
            <mat-card-header>
              <mat-card-title>{{ booking.coworkingSpace }}</mat-card-title>
              <mat-card-subtitle>{{ booking.room }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>{{ booking.date }} - {{ booking.time }}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">{{ 'USER.BOOK_NOW' | translate }}</button>
            </mat-card-actions>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [
    `
      .availability-container {
        margin: 20px;
      }
      .filters {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
      }
      .loading {
        text-align: center;
        margin-top: 50px;
      }
    `
  ]
})
export class ExploreAvailabilityComponent {
  filtersForm: FormGroup;
  spaceTypes = ['Room', 'Desk', 'Open Space'];
  loading$: Observable<boolean>;
  filteredBookings$: Observable<any[]>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.filtersForm = this.fb.group({
      location: [''],
      date: [''],
      type: ['']
    });

    this.loading$ = this.store.select(selectLoading);
    this.filteredBookings$ = this.store.select(selectAllBookings); // Filtro ficticio
    this.store.dispatch(BookingActions.loadBookings());

  }

  applyFilters() {
    const filters = this.filtersForm.value;
    // Aquí se puede implementar lógica de filtrado usando NgRx o localmente.
    console.log('Aplicando filtros:', filters);
  }
}
