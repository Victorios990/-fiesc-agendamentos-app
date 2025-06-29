import { APP_BASE_HREF } from '@angular/common';
import { provideServerRendering } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app';
import { appConfig } from './app.config.server';

export const AppServerModule = () =>
  bootstrapApplication(App, {
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      provideServerRendering(),
      ...appConfig.providers
    ],
  });
