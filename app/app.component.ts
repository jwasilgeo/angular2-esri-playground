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
        <nav class="">
            <a href="#" class="brand">
                <span>Angular 2 + Esri 4</span>
            </a>

            <!-- responsive-->
            <input id="bmenub" type="checkbox" class="show">
            <label for="bmenub" class="burger pseudo button">menu</label>

            <div class="menu">
                <a class="pseudo button" [routerLink]="['Intro']">Intro</a>
                <a class="button" [routerLink]="['EsriMapView']">MapView</a>
                <a class="button" [routerLink]="['EsriSceneView']">SceneView</a>
            </div>
        </nav>
        <router-outlet></router-outlet>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, ViewCoordinationService]
})
export class AppComponent { }
