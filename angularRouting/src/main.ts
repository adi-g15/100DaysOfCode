import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { timer } from 'rxjs';

if (environment.production) {
  enableProdMode();
}

console.log(timer(1000))

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
