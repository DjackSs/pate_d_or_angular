import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import player from 'lottie-web';
import { provideLottieOptions } from 'ngx-lottie';
import { routes } from './app.routes';
import { tokenInterceptor } from './interceptor/token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideLottieOptions({
      player: () => player,
    }),
    provideHttpClient(withInterceptors([tokenInterceptor])),
  ],
};
