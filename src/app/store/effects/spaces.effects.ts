// src/app/store/effects/spaces.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../core/services/api.service';
import { catchError, debounceTime, map, mergeMap } from 'rxjs/operators';
import * as SpacesActions from '../actions/spaces.actions';
import { of } from 'rxjs';

@Injectable()
export class SpacesEffect {
  loadSpaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SpacesActions.loadSpaces),
      debounceTime(500),
      mergeMap((action) =>
        this.apiService.get('espacios/disponibles', { nombre: action.nombre, capacidad: action.capacidad, hora: action.hora }).pipe(
          map((spaces: any) => SpacesActions.loadSpacesSuccess({ spaces })),
          catchError((error) =>
            of(SpacesActions.loadSpacesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
