import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

import {Ng2BlogApp, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2BlogApp, [
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase('https://your-firebase-base-url.firebaseio.com'),
]);
