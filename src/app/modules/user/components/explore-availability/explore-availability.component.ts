// src/app/modules/user/components/explore-availability/explore-availability.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SpaceActions from '../../../../store/actions/spaces.actions';
import * as BookingActions from '../../../../store/actions/bookings.actions';
import { selectAllSpaces, selectError, selectLoading, selectFilteredSpacesLength } from '../../../../store/selectors/spaces.selectors';
import { integerRangeValidator } from '../../../../validators/integer-range-validator';
import { onlyLettersValidator } from '../../../../validators/only-letter-validator';
import { generateHoursArray } from '../../../../utils/hour-array-generator';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-explore-availability',
  templateUrl: './explore-availability.component.html',
  styleUrls: ['./explore-availability.component.scss']
})
export class ExploreAvailabilityComponent {
  filtersForm: FormGroup;
  loading$: Observable<boolean>;
  hours: string[] = [
  ];
  filteredSpaces$: Observable<any[]>;
  filteredSpacesLength$: Observable<number>;
  showResults: boolean = false;
  today: string = new Date().toISOString().split('T')[0];
  errorMsg?: string = null;

  constructor(private fb: FormBuilder, private store: Store, private dialog: MatDialog) {
    // Generar el array con horas de 09:00 a 19:00
    this.hours.push(...generateHoursArray('09:00', '19:00'))
    this.filtersForm = this.fb.group({
      location: ['', [onlyLettersValidator()]],
      capacity: ['', [Validators.required, integerRangeValidator(1, 100)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });

    this.filtersForm.valueChanges.subscribe(() => {
      this.checkFormValidity();
    });
    this.loading$ = this.store.select(selectLoading);
    this.filteredSpaces$ = this.store.select(selectAllSpaces); // Filtro ficticio
  }

  checkFormValidity() {
    if (this.filtersForm.valid) {
      this.showResults = false;
      this.errorMsg = null;
      const values = this.filtersForm.value;
      const isoDate = `${new Date(values.date).toISOString().split('T')[0]}T${values.time}:00Z`;
      this.store.dispatch(SpaceActions.loadSpaces({ nombre: values.location, capacidad: values.capacity, hora: isoDate}));
      this.filteredSpacesLength$ = this.store.select(selectFilteredSpacesLength);
      this.store.select(selectError).subscribe((result) => {
        if(result) {
          this.errorMsg = result;
        }
      });
    } else {
      console.log('Formulario incompleto');
    }
  }

  onSubmit() {
    this.showResults = true;
  }

  openBookingModal(space: any) {
    const values = this.filtersForm.value;
    const date = new Date(values.date).toISOString().split('T')[0];
    const isoDate = `${date}T${values.time}:00Z`;
    const dialogRef = this.dialog.open(BookingModalComponent, {
      width: '400px',
      data: {...space, iso_date: isoDate, date_formatted: `${date} ${values.time}`  }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(BookingActions.addBooking(
          { documentoIdentidad: result.dni, horaReservacion: result.iso_date, espacioId: result.id, email: result.email }
        ));
      }
    });
  }
}
