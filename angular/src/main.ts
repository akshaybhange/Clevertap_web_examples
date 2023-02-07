import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import clevertap from 'clevertap-web-sdk';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

clevertap.init('4RR-R77-866Z', 'eu1'); // Replace YOUR_ACCOUNT_ID, can be initialized just once //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: true});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
