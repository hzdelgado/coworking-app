// src/app/modules/user/components/explore-availability/explore-availability.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SpaceActions from '../../../../store/actions/spaces.actions';
import { selectAllSpaces, selectLoading } from '../../../../store/selectors/spaces.selectors';
import { integerRangeValidator } from '../../../../validators/integer-range-validator';
import { onlyLettersValidator } from '../../../../validators/only-letter-validator';
import { generateHoursArray } from '../../../../utils/hour-array-generator';

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

  constructor(private fb: FormBuilder, private store: Store) {
    // Generar el array con horas de 09:00 a 19:00
    this.hours.push(...generateHoursArray('09:00', '19:00'))
    this.filtersForm = this.fb.group({
      location: ['', [Validators.required, onlyLettersValidator()]],
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
      const values = this.filtersForm.value;
      const isoDate = `${new Date(values.date).toISOString().split('T')[0]}T${values.time}:00Z`;

      console.log('values', values, isoDate)
      this.store.dispatch(SpaceActions.loadSpaces({ nombre: values.location, capacidad: values.capacity, hora: isoDate}));
    } else {
      console.log('Formulario incompleto');
    }
  }

  onSubmit() {
    // Mostrar resultados
    console.log('show results');
  }
}
