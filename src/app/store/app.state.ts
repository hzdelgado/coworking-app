import { Booking } from "./models/bookings.model";
import { Space } from "./models/spaces.model";

// src/app/store/app.state.ts
export interface AppState {
    spaces: Space[];
    booking: Booking;
    loading: boolean;
    error: string | null;
  }
  
  export const initialState: AppState = {
    spaces: [],
    booking: null,
    loading: false,
    error: null
  };
  