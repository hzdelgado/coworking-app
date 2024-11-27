import { Routes } from '@angular/router';
import { ExploreAvailabilityComponent } from './modules/user/components/explore-availability/explore-availability.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/explore-availability', pathMatch: 'full' },
    { path: 'explore-availability', component: ExploreAvailabilityComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent },
    { path: '**', redirectTo: '/explore-availability' }
  ];
  
