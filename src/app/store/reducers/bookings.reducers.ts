// src/app/store/bookings.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialState } from '../app.state';
import * as BookingActions from '../actions/bookings.actions';

export const bookingsReducer = createReducer(
  initialState,
  on(BookingActions.loadBooking, (state) => ({
    ...state,
    loading: true
  })),
  on(BookingActions.loadBookingSuccess, (state, { booking }) => ({
    ...state,
    booking,
    loading: false,
    error: null
  })),
  on(BookingActions.loadBookingFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(BookingActions.addBookingSuccess, (state, { booking }) => ({
    ...state,
    booking: {...state.booking, booking },
    error: null
  })),
  on(BookingActions.addBookingFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
