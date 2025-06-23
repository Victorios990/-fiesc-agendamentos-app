import { AppServerModule } from './app/app.server.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-server';

bootstrapApplication(AppServerModule, {
  providers: [],
}).catch((err) => console.error(err));
