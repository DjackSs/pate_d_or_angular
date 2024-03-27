import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { tokenInterceptor } from './interceptor/token.interceptor';
import player from 'lottie-web';
import { provideLottieOptions } from 'ngx-lottie';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideLottieOptions({
      player: () => player,
    }), provideAnimationsAsync(),
  ],
};
