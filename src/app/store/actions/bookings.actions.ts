import { createAction, props } from '@ngrx/store';
import { Booking } from '../models/bookings.model';

export const loadBooking = createAction('[Booking] Load Booking',props<{ document: string }>());

export const loadBookingSuccess = createAction(
  '[Booking] Load Booking Success',
  props<{ booking: Booking }>()
);

export const loadBookingFailure = createAction(
  '[Booking] Load Booking Failure',
  props<{ error: string }>()
);

export const addBooking = createAction(
  '[Bookings] Add Booking',
  props<{ documentoIdentidad?: number; espacioId?: number, horaReservacion?: string, email?: string }>()
);

export const addBookingSuccess = createAction(
  '[Bookings] Add Booking Success',
  props<{ booking: Booking }>()
);

export const addBookingFailure = createAction(
  '[Bookings] Add Booking Failure',
  props<{ error: string }>()
);
