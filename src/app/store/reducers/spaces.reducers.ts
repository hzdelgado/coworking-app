// src/app/store/spaces.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialState } from '../app.state';
import * as SpaceActions from '../actions/spaces.actions';

export const spacesReducer = createReducer(
  initialState,
  on(SpaceActions.loadSpaces, (state) => ({
    ...state,
    loading: true
  })),
  on(SpaceActions.loadSpacesSuccess, (state, { spaces }) => ({
    ...state,
    spaces,
    loading: false,
    error: null
  })),
  on(SpaceActions.loadSpacesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
);
