import { createAction, props } from '@ngrx/store';
import { Booking } from '../models/bookings.model';


export const loadBookings = createAction('[Bookings] Load Bookings');
export const loadBookingsSuccess = createAction(
  '[Booking] Load Bookings Success',
  props<{ bookings: Booking[] }>()
);
