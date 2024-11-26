import { createReducer, on } from "@ngrx/store";
import { loadBookings, loadBookingsSuccess } from "../actions/bookings.actions";
import { Booking } from "../models/bookings.model";
import { initialState } from "../app.state";


const reservationsReducer = createReducer(
  initialState,
  on(loadBookingsSuccess, (state, { bookings }) => ({ ...state, bookings }))
);
