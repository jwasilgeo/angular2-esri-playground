import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

// use the hash url location strategy, see:
//  - https://angular.io/docs/ts/latest/guide/router.html#!#-hashlocationstrategy-
//  - http://julienrenaux.fr/2015/12/25/angular2-series-routing/#HashLocationStrategy
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { provide } from 'angular2/core';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {
        useClass: HashLocationStrategy
    })
]);
