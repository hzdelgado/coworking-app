// src/app/modules/user/components/explore/explore.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllBookings, selectLoading } from '../../../../store/selectors/bookings.selectors';
import * as BookingActions from '../../../../store/actions/bookings.actions';

@Component({
  selector: 'app-explore',
  template: `
    <div *ngIf="loading$ | async">Loading...</div>
    <ul>
      <li *ngFor="let booking of bookings$ | async">
        {{ booking.coworkingSpace }} - {{ booking.room }}
      </li>
    </ul>
  `
})
export class ExploreComponent implements OnInit {
  bookings$: Observable<any[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.bookings$ = this.store.select(selectAllBookings);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit() {
    this.store.dispatch(BookingActions.loadBookings());
  }
}
