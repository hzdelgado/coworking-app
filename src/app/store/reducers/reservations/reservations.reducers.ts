const initialState: ReservationState = { reservations: [] };
const reservationsReducer = createReducer(
  initialState,
  on(loadReservationsSuccess, (state, { reservations }) => ({ ...state, reservations }))
);
