// src/app/modules/user/user.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BookingComponent } from './components/booking/booking.component';
import { ExploreAvailabilityComponent } from './components/explore-availability/explore-availability.component';
import { StoreModule } from '@ngrx/store';
import { bookingsReducer } from '../../store/reducers/bookings.reducers';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { BookingModalComponent } from './components/booking-modal/booking-modal.component';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD', // Formato de entrada
  },
  display: {
    dateInput: 'YYYY-MM-DD', // Formato en el campo de entrada
    monthYearLabel: 'MMM YYYY', // Formato en el selector de mes/año
    dateA11yLabel: 'YYYY-MM-DD', // Para accesibilidad
    monthYearA11yLabel: 'MMMM YYYY', // Para accesibilidad
  },
};

@NgModule({
  declarations: [ExploreAvailabilityComponent, BookingComponent, HomeComponent, NavbarComponent, FooterComponent, UserViewComponent, BookingModalComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    StoreModule.forFeature('bookings', bookingsReducer),
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }, // Puedes cambiar el locale según tu región

  ], 
})
export class UserModule {}
