import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default function (req: any, res: any) {
  return renderModule(AppServerModule, {
    url: req.originalUrl,
    document: '<!doctype html><html lang="en"><head></head><body><app-root></app-root></body></html>',
  });
}
