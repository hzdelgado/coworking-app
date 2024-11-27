console.log('Server file is running...');
import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from './src/app/app.server.module';
import { join } from 'path';
import express from 'express';
import { existsSync } from 'fs';
import dotenv from 'dotenv';

process.on('uncaughtException', (err) => {
  console.error('Error no capturado:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('Promesa rechazada sin manejar:', reason);
});

dotenv.config();
enableProdMode();

const app = express();
const distFolder = join(process.cwd(), 'dist/coworking-app/browser');
const indexHtml = existsSync(join(distFolder, 'index.html')) ? 'index.html' : '404.html';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder, {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  console.log(`Petición recibida: ${req.originalUrl}`);
  res.render(indexHtml, { req });
});

const port = process.env['PORT'] || 4000;
app.listen(port, () => {
  console.log(`Node server listening on http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Error al iniciar el servidor:', err);
});
/*
import * as express from 'express';

const app = express();

app.get('*', (req, res) => {
  console.log('Petición recibida');
  res.send('Hello World');
});

const port = 4001;
app.listen(port, () => {
  console.log(`Servidor Express en http://localhost:${port}`);
});*/
