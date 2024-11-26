// src/app/modules/user/components/explore/explore.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-explore',
  template: `
    <mat-toolbar>
      <span>{{ 'NAV.EXPLORE' | translate }}</span>
    </mat-toolbar>
    <div class="explore-container">
      <h2>{{ 'USER.BOOK_NOW' | translate }}</h2>
      <button mat-raised-button color="primary">{{ 'USER.CHECK_AVAILABILITY' | translate }}</button>
    </div>
  `,
  styles: ['.explore-container { text-align: center; margin-top: 20px; }']
})
export class ExploreComponent {}
