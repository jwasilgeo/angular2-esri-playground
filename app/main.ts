import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { IntroComponent } from './intro.component';

import { SyncedViewsComponent } from './synced-views.component';
import { EsriSceneViewComponent } from './esri-scene-view.component';

import { GeometryEngineShowcaseComponent } from './geometry-engine-showcase.component';
import { EsriMapViewComponent } from './esri-map-view.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    }, {
        path: 'intro',
        component: IntroComponent
    }, {
        path: 'synced-views',
        component: SyncedViewsComponent
    }, {
        path: 'geom-engine-showcase',
        component: GeometryEngineShowcaseComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [
        AppComponent,

        IntroComponent,

        SyncedViewsComponent,
        EsriSceneViewComponent,

        GeometryEngineShowcaseComponent,
        EsriMapViewComponent
    ],
    // providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
