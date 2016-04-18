import {bootstrap} from 'angular2/platform/browser';
import {provideStore} from "@ngrx/store";
import {instrumentStore, devtoolsConfig} from "@ngrx/devtools";

import {Ng2BlogApp} from './app/ng2-blog';
import {databaseState} from './app/reducers/database-state.reducer';
import {uiState} from './app/reducers/ui-state.reducer';

bootstrap(Ng2BlogApp, [
    provideStore({databaseState, uiState}),
    instrumentStore(),
    devtoolsConfig({
        position: "bottom",
        visible: false, //TODO why don't the shortcuts trigger visibility or positions???
        size: 0.3
    }),

]);
