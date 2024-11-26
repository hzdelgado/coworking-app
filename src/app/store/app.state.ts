import { Booking } from "./models/bookings.model";

// src/app/store/app.state.ts
export interface AppState {
    bookings: Booking[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialState: AppState = {
    bookings: [],
    loading: false,
    error: null
  };
  