import { provideRouter } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { bookingsReducer } from './store/reducers/bookings.reducers';
import { provideStore, StoreModule } from '@ngrx/store';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
export const appConfig = {
  standalone: true,
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({ bookings: bookingsReducer }),
    AdminModule, UserModule
  ],
  providers: [
    provideStore({ bookings: bookingsReducer }),
    provideHttpClient(),
    provideRouter(routes), 
    provideAnimations(),
  ]
};
