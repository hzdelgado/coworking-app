import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
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
      const payload = { ...this.reservationForm.value, ...this.data };
      console.log('payload', payload)
      this.dialogRef.close(payload);
    }
  }
}
