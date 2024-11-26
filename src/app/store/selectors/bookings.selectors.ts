// src/app/store/bookings.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectBookingState = createFeatureSelector<AppState>('bookings');

export const selectAllBookings = createSelector(
  selectBookingState,
  (state) => state.bookings
);

export const selectLoading = createSelector(
  selectBookingState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectBookingState,
  (state) => state.error
);
