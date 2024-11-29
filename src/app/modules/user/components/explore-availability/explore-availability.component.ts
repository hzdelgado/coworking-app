// src/app/modules/user/components/explore-availability/explore-availability.component.ts
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SpaceActions from '../../../../store/actions/spaces.actions';
import { selectAllSpaces, selectLoading, selectFilteredSpacesLength } from '../../../../store/selectors/spaces.selectors';
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
  gridCols = 3;
  
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

  ngOnInit() {
    this.onResize(null); // Establece el valor inicial
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target?.innerWidth?? window.innerWidth;
    if (width <= 1100) {
      this.gridCols = 2; // 1 columna para pantallas pequeñas
    } else if (width <= 830) {
      this.gridCols = 1; // 2 columnas para pantallas medianas
    } else {
      this.gridCols = 3; // 3 columnas para pantallas grandes
    }
  }

  checkFormValidity() {
    if (this.filtersForm.valid) {
      this.showResults = false;
      const values = this.filtersForm.value;
      const isoDate = `${new Date(values.date).toISOString().split('T')[0]}T${values.time}:00Z`;
      this.store.dispatch(SpaceActions.loadSpaces({ nombre: values.location, capacidad: values.capacity, hora: isoDate}));
      this.filteredSpacesLength$ = this.store.select(selectFilteredSpacesLength);
    } else {
      console.log('Formulario incompleto');
    }
  }

  onSubmit() {
    // Mostrar resultados
    this.showResults = true; // Mostrar los resultados al hacer clic en el botón
    console.log('show results');
  }

  openBookingModal(space: any) {
    const dialogRef = this.dialog.open(BookingModalComponent, {
      width: '400px',
      data: space // Pasamos información del espacio al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Datos de la reserva:', result);
        // Aquí puedes manejar los datos de la reserva, como enviarlos al servidor
      }
    });
  }
}
