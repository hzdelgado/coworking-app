import { createAction, props } from '@ngrx/store';
import { Booking } from '../models/bookings.model';

export const loadBookings = createAction('[Bookings] Load Bookings');

export const loadBookingsSuccess = createAction(
  '[Booking] Load Bookings Success',
  props<{ bookings: Booking[] }>()
);

export const loadBookingsFailure = createAction(
  '[Bookings] Load Bookings Failure',
  props<{ error: string }>()
);

export const addBooking = createAction(
  '[Bookings] Add Booking',
  props<{ booking: Booking }>()
);

export const addBookingSuccess = createAction(
  '[Bookings] Add Booking Success',
  props<{ booking: Booking }>()
);

export const addBookingFailure = createAction(
  '[Bookings] Add Booking Failure',
  props<{ error: string }>()
);
