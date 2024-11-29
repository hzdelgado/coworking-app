// src/app/store/effects/spaces.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../core/services/api.service';
import { loadBooking, loadBookingSuccess } from '../actions/bookings.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookingActions from '../actions/bookings.actions';
import { of } from 'rxjs';

@Injectable()
export class BookingsEffect {
  loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBooking),
      mergeMap(() =>
        this.apiService.get('bookings').pipe(
          map((booking: any) => loadBookingSuccess({ booking })),
          catchError((error) =>
            of(BookingActions.loadBookingFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
