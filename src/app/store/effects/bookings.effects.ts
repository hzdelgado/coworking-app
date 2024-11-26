// src/app/store/effects/spaces.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../core/services/api.service';
import { loadBookings, loadBookingsSuccess } from '../actions/bookings.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ReservationEffects {
  loadSpaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookings),
      mergeMap(() =>
        this.apiService.get('bookings').pipe(
          map((bookings: any) => loadBookingsSuccess({ bookings }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
