import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
// import { ViewCoordinationService } from './view-coordination.service';
import { IntroComponent } from './intro.component';
import { SyncedViewsComponent } from './synced-views.component';
import { GeometryEngineShowcaseComponent } from './geometry-engine-showcase.component';

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
    },
    {
        path: '/geom-engine-showcase',
        name: 'GeometryEngineShowcase',
        component: GeometryEngineShowcaseComponent
    }
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
            <label for="bmenub" class="burger pseudo button">≡</label>

            <div class="menu">
                <a class="pseudo button" [routerLink]="['Intro']">Intro</a>
                <a class="button" [routerLink]="['SyncedViews']">Synced 3D Views</a>
                <a class="button" [routerLink]="['GeometryEngineShowcase']">Geometry Engine</a>

                <a class="pseudo button" href="https://github.com/jwasilgeo/angular2-esri-playground">Github</a>
                <a class="pseudo button" href="https://twitter.com/JWasilGeo">@JWasilGeo</a>
            </div>
        </nav>
        <main>
            <section>
                <router-outlet></router-outlet>
            </section>
        </main>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS/*, ViewCoordinationService*/]
})
export class AppComponent { }
