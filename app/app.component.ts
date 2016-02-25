import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { ViewCoordinationService } from './view-coordination.service';
import { IntroComponent } from './intro.component';
import { EsriMapViewComponent } from './esri-map-view.component';
import { EsriSceneViewComponent } from './esri-scene-view.component';

@RouteConfig([
    {
        path: '/intro',
        name: 'Intro',
        component: IntroComponent,
        useAsDefault: true
    },
    {
        path: '/esri-map-view',
        name: 'EsriMapView',
        component: EsriMapViewComponent
    },
    {
        path: '/esri-scene-view',
        name: 'EsriSceneView',
        component: EsriSceneViewComponent
    }
])
@Component({
    selector: 'my-app',
    template:
        `
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
                <h2>Angular 2 + Esri 4</h2>
                <nav>
                    <a class="mdl-button mdl-js-button mdl-button" [routerLink]="['Intro']">Intro</a>
                    <a class="mdl-button mdl-js-button mdl-button--primary" [routerLink]="['EsriMapView']">MapView</a>
                    <a class="mdl-button mdl-js-button mdl-button--accent" [routerLink]="['EsriSceneView']">SceneView</a>
                </nav>
                <router-outlet class="mdl-shadow--2dp"></router-outlet>
            </div>
        </div>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, ViewCoordinationService]
})
export class AppComponent { }
