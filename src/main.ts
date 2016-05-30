import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import {Ng2BlogApp, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2BlogApp, [
  HTTP_PROVIDERS,
]);
