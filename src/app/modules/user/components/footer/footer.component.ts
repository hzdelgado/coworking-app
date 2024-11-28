// src/app/modules/user/components/booking/booking.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-footer',
  template: `
    <div class="app__mat-footer">
        <span>{{ 'FOOTER.TITLE' | translate }}</span>
    </div>
  `,
  styles: ['']
})
export class FooterComponent {}
