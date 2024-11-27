// src/app/modules/user/user.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BookingComponent } from './components/booking/booking.component';
import { ExploreAvailabilityComponent } from './components/explore-availability/explore-availability.component';
import { StoreModule } from '@ngrx/store';
import { bookingsReducer } from '../../store/reducers/bookings.reducers';

@NgModule({
  declarations: [ExploreAvailabilityComponent, BookingComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    StoreModule.forFeature('bookings', bookingsReducer),
  ],

  exports: [ExploreAvailabilityComponent, BookingComponent]
})
export class UserModule {}
