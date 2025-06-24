// frontend/src/app/app.server.module.ts

import { APP_BASE_HREF } from '@angular/common';
import { provideServerRendering } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';  // <- aqui!
import { App } from './app';
import { config } from './app.config.server';

export const AppServerModule = () =>
  bootstrapApplication(App, {
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      provideServerRendering(),
      ...config.providers
    ],
  });
