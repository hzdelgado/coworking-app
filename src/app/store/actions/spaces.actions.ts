import { createAction, props } from "@ngrx/store";
import { Space } from "../models/spaces.model";

export const loadSpaces = createAction(
    '[Space] Load Spaces',
    props<{ nombre?: string; capacidad?: number, hora?: string }>()
);

export const loadSpacesSuccess = createAction(
  '[Booking] Load Spaces Success',
  props<{ spaces: Space[] }>()
);

export const loadSpacesFailure = createAction(
  '[Spaces] Load Spaces Failure',
  props<{ error: string }>()
);