import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localEs from '@angular/common/locales/es-CO'
import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/locale.service';

registerLocaleData(localEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),


    {
      provide: LOCALE_ID,
      // useValue: 'es',
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale
    }
  ]
};
