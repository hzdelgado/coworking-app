import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css']
})
export class BookingModalComponent {
  reservationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.reservationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  confirmReservation() {
    if (this.reservationForm.valid) {
      // Aquí puedes manejar la reserva, por ejemplo, enviarla a un backend
      console.log('Reserva Confirmada:', { ...this.reservationForm.value, ...this.data });
      this.dialogRef.close(this.reservationForm.value); // Envía los datos al cerrar
    }
  }
}
