import { provideServerRendering } from '@angular/ssr';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    provideHttpClient(),
    provideRouter(routes),
  ]
})
  .catch((err) => {
    // Log detalhado para facilitar o debug no SSR
    console.error('Erro ao iniciar a aplicação no servidor (SSR):', err);
  });
