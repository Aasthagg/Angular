import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { OtherModule } from './app/othermodule/other.module';
import { RegistrationModule } from './app/registration/registration.module';
import { ChangeDetectionModule } from './app/changedetection/changedetection.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ChangeDetectionModule)
  .catch(err => console.error(err));
