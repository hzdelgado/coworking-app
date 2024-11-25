export const loadReservations = createAction('[Reservations] Load Reservations');
export const loadReservationsSuccess = createAction(
  '[Reservations] Load Reservations Success',
  props<{ reservations: Reservation[] }>()
);
