// src/app/modules/admin/components/dashboard/dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <mat-toolbar>
      <span>{{ 'NAV.ADMIN' | translate }}</span>
    </mat-toolbar>
    <div class="dashboard-container">
      <button mat-raised-button>{{ 'ADMIN.ADD_SPACE' | translate }}</button>
      <button mat-raised-button>{{ 'ADMIN.MANAGE_BOOKINGS' | translate }}</button>
    </div>
  `,
  styles: ['.dashboard-container { text-align: center; margin-top: 20px; }']
})
export class DashboardComponent {}
