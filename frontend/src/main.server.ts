// frontend/src/main.server.ts
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Exporta a factory function do AppServerModule
export { AppServerModule } from './app/app.server.module';
