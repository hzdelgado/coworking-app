// src/app/modules/user/user-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreAvailabilityComponent } from './components/explore-availability/explore-availability.component';
import { BookingComponent } from './components/booking/booking.component';
import { HomeComponent } from './components/home/home.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  { path: '', component: UserViewComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'explore-availability', component: ExploreAvailabilityComponent }
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
