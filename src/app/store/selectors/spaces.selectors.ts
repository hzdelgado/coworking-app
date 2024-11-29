// src/app/store/bookings.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectSpacesState = createFeatureSelector<AppState>('spaces');

export const selectAllSpaces = createSelector(
  selectSpacesState,
  (state) => state.spaces
);

export const selectLoading = createSelector(
  selectSpacesState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectSpacesState,
  (state) => state.error
);

export const selectFilteredSpacesLength = createSelector(
  selectAllSpaces,
  (filteredSpaces) => filteredSpaces.length // Devuelve la longitud de los espacios filtrados
);
