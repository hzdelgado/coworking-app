// src/app/store/effects/spaces.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../core/services/api.service';
import { loadBooking, loadBookingSuccess } from '../actions/bookings.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as BookingActions from '../actions/bookings.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class BookingsEffect {
  constructor(private actions$: Actions, private apiService: ApiService, private router: Router) {}
  
  addBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.addBooking),
      mergeMap((action) =>
        this.apiService.post('reservaciones', { documentoIdentidad: action.documentoIdentidad, horaReservacion: action.horaReservacion, espacioId: action.espacioId, email: action.email }).pipe(
          map((booking: any) => BookingActions.addBookingSuccess({ booking })),
          catchError((error) =>
            of(BookingActions.addBookingFailure({ error: error.error.message }))
          )
        )
      )
    )
  );

  listenAddBookingSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookingActions.addBookingSuccess), // Escucha el action addBookingSuccess
      tap(() => {
        this.router.navigate(['/']);
      })
    );
  }, { dispatch: false }); 

  loadBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBooking),
      mergeMap((action) =>
        this.apiService.get('reservaciones/documento/' + action.document).pipe(
          map((booking: any) => loadBookingSuccess({ booking })),
          catchError((error) => {
            console.log('error', error)
            return of(BookingActions.loadBookingFailure({ error: error.error.message }))
          })
        )
      )
    )
  );

}
