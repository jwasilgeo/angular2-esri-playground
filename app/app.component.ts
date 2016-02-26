import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { ViewCoordinationService } from './view-coordination.service';
import { IntroComponent } from './intro.component';
import { SyncedViewsComponent } from './synced-views.component';
// import { EsriMapViewComponent } from './esri-map-view.component';
// import { EsriSceneViewComponent } from './esri-scene-view.component';

@RouteConfig([
    {
        path: '/intro',
        name: 'Intro',
        component: IntroComponent,
        useAsDefault: true
    },
    {
        path: '/synced-views',
        name: 'SyncedViews',
        component: SyncedViewsComponent
    }/*,
    {
        path: '/esri-map-view',
        name: 'EsriMapView',
        component: EsriMapViewComponent
    },
    {
        path: '/esri-scene-view',
        name: 'EsriSceneView',
        component: EsriSceneViewComponent
    }*/
])
@Component({
    selector: 'my-app',
    styles: [`
        section {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 4em 0 0 0;
        }
        `],
    template: `
        <nav class="">
            <a href="#" class="brand">
                <span>Angular 2 + Esri 4</span>
            </a>

            <!-- responsive-->
            <input id="bmenub" type="checkbox" class="show">
            <label for="bmenub" class="burger pseudo button">menu</label>

            <div class="menu">
                <a class="pseudo button" [routerLink]="['Intro']">Intro</a>
                <a class="button" [routerLink]="['SyncedViews']">Synced Views</a>
            </div>
        </nav>
        <main>
            <section>
                <router-outlet></router-outlet>
            </section>
        </main>
        `,
                // <a class="button" [routerLink]="['EsriMapView']">Map View</a>
                // <a class="button" [routerLink]="['EsriSceneView']">Scene View</a>
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, ViewCoordinationService]
})
export class AppComponent { }
