import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  providers: [TranslateService],
  template: `
    <mat-toolbar color="primary">
      <span>CoWorking App</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/explore-availability">Explorar Disponibilidad</button>
      <button mat-button routerLink="/admin-dashboard">Panel de Administración</button>
    </mat-toolbar>
    
    <router-outlet></router-outlet>
  `,
  styles: [`
    .spacer {
      flex-grow: 1;
    }
  `]
})
export class AppComponent {
  title = "CoworkingApp"
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
