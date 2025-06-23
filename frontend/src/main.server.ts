import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Este arquivo apenas serve para exportar o AppServerModule para o server.ts
export { AppServerModule } from './app/app.server.module';
