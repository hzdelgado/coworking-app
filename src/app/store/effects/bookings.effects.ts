// src/app/store/effects/spaces.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../core/services/api.service';
import { loadBookings, loadBookingsSuccess } from '../actions/bookings.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookingActions from '../actions/bookings.actions';
import { of } from 'rxjs';

@Injectable()
export class BookingsEffect {
  loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBookings),
      mergeMap(() =>
        this.apiService.get('bookings').pipe(
          map((bookings: any) => loadBookingsSuccess({ bookings })),
          catchError((error) =>
            of(BookingActions.loadBookingsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
