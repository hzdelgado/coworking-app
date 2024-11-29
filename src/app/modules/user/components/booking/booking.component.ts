// src/app/modules/user/components/booking/booking.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as BookingActions from '../../../../store/actions/bookings.actions';
import { selectBooking, selectLoading, selectError } from '../../../../store/selectors/bookings.selectors';
import { Observable } from 'rxjs';
import { Booking } from '../../../../store/models/bookings.model';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  searchForm: FormGroup;
  booking: Booking | null;
  loading$: Observable<boolean>;
  errorMsg: string = null;

  constructor(private fb: FormBuilder, private store: Store) {
    this.searchForm = this.fb.group({
      document: ['', [Validators.required, Validators.minLength(8)]],
     });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      
      this.booking = null;
      const values = this.searchForm.value;
      this.loading$ = this.store.select(selectLoading);
      this.store.dispatch(BookingActions.loadBooking({ document: values.document}));
      this.store.select(selectBooking).subscribe((result) => {

        if(result) {
          this.booking = result;        
          this.errorMsg = null;

        }
      });
      this.store.select(selectError).subscribe((result) => {

        if(result) {
          this.booking = null;
          this.errorMsg = result;
        }
      });
    }
  }
}
