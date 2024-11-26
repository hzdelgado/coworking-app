// src/app/store/bookings.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AppState, initialState } from '../app.state';
import * as BookingActions from '../actions/bookings.actions';

export const bookingsReducer = createReducer(
  initialState,
  on(BookingActions.loadBookings, (state) => ({
    ...state,
    loading: true
  })),
  on(BookingActions.loadBookingsSuccess, (state, { bookings }) => ({
    ...state,
    bookings,
    loading: false,
    error: null
  })),
  on(BookingActions.loadBookingsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(BookingActions.addBookingSuccess, (state, { booking }) => ({
    ...state,
    bookings: [...state.bookings, booking],
    error: null
  })),
  on(BookingActions.addBookingFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
