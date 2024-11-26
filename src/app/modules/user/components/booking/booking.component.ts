// src/app/modules/user/components/booking/booking.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  template: `
    <mat-toolbar>
      <span>{{ 'USER.BOOK_NOW' | translate }}</span>
    </mat-toolbar>
    <div class="booking-container">
      <h3>{{ 'USER.CHECK_AVAILABILITY' | translate }}</h3>
    </div>
  `,
  styles: ['.booking-container { text-align: center; margin-top: 20px; }']
})
export class BookingComponent {}
