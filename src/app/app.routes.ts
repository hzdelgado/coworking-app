import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: '', 
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) 
  },
  { 
    path: 'admin-dashboard', 
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
