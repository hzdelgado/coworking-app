// src/app/modules/user/components/explore-availability/explore-availability.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllBookings, selectLoading } from '../../../../store/selectors/bookings.selectors';
import * as BookingActions from '../../../../store/actions/bookings.actions';

@Component({
  selector: 'app-explore-availability',
  templateUrl: './explore-availability.component.html',
  styleUrls: ['./explore-availability.component.scss']
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
