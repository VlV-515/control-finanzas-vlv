import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment.development';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: environment.auth0.DOMAIN,
        clientId: environment.auth0.CLIENT_ID,
        authorizationParams: {
          redirect_uri: environment.auth0.REDIRECT_URI,
        },
      })
    ),
  ],
};
