import { Component, ViewChildren } from 'angular2/core';
import { EsriMapViewComponent } from './esri-map-view.component';

@Component({
    selector: 'geometry-engine-showcase',
    template:
        `
        <esri-map-view zoom="3" centerLng="-169" centerLat="65" rotation="180"></esri-map-view>
        <code>stuff goes here<code>
        `,
        // <esri-map-view zoom="3" center="[-169, 65]" rotation="75"></esri-map-view>
    directives: [EsriMapViewComponent]
})
export class GeometryEngineShowcaseComponent {
    isMobile: false;
    isMobileMessage: null;
    delaySync: false;
    disableSync: false;

    constructor() { }
}
