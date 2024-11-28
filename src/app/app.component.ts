import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  providers: [TranslateService],
  template: `<div class="app__container">
    <router-outlet></router-outlet>
  </div>`,
  })
export class AppComponent {
  title = "Booking Bootlet"
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }
}
