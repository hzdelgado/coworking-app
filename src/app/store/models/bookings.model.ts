import { Space } from "./spaces.model";

export interface Booking {
    id: string;
    documentoIdentidad: number;
    horaReservacion: string;
    espacioId: number;
    espacio: Space;
    email: string;
    codigoReservacion: string;
  }
  