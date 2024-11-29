import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class UserViewComponent {
  getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
