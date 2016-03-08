import { Component, ViewChildren } from 'angular2/core';

// Observables and RxJS
import { Control } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { EsriMapViewComponent } from './esri-map-view.component';
import { geometryEngineAsync, Graphic, SimpleFillSymbol, SimpleLineSymbol } from 'esri-mods';

@Component({
    selector: 'geometry-engine-showcase',
    styles: [`
        .workflow {
            font-style: italic;
            font-size: 0.8em;
        }
        .rangeSlider {
            margin: 0 10px;
            max-width: 200px;
            vertical-align: middle;
        }
        .label-override {
            margin-left: 0;
            margin-right: 1em;
        }
        .card pre {
            margin: 0 15px 20px 15px;
            width: auto;
        }
        `],
    template:
        `
        <h4>Vector GIS analysis with Esri's client-side geometry engine</h4>

        <esri-map-view #mapView (viewCreated)="setView(mapView.view)"
            zoom="6" centerLng="-18.5" centerLat="65" rotation="180">
        </esri-map-view>

        <span class="workflow">Workflow: create geodesic buffer &rarr; create convex hull &rarr; calculate buffer and convex hull areas</span>

        <p>Change the buffer distance to begin:</p>
        <div>
            <input type="range" min="10" max="300" step="5"
                class="rangeSlider"
                [ngFormControl]="bufferDistanceControl">
            <span>{{ bufferDistanceDisplay }} km</span>
        </div>
        
        <ul>
            <li>volcanoes buffered in extent: {{ featureCount }}</li>
            <li>unioned buffer area: {{ bufferPolygonSize | number:'1.1-1' }} km<sup>2</sup></li>
            <li>convex hull area: {{ convexHullPolygonSize | number:'1.1-1' }} km<sup>2</sup></li>
        </ul>

        <div class="card">
            <p><span class="label label-override">Info</span>This Esri map view was created with a custom Angular 2 component with several <code>@Input</code> bindings and an <code>EventEmitter()</code> event binding:</p>
            <pre>
<code>&lt;esri-map-view #mapView (viewCreated)="setView(mapView.view)"
    zoom="6" centerLng="-18.5" centerLat="65" rotation="180"&gt;
&lt;/esri-map-view&gt;</code>
            </pre>
        </div>
        `,
    directives: [EsriMapViewComponent]
})
export class GeometryEngineShowcaseComponent {
    viewReference: null;
    volcanoesLayer: null;
    volcanoesLayerView: null;
    analysisLayer: null;
    featureCount: 0;
    bufferPolygonSize: 0;
    convexHullPolygonSize: 0;

    bufferDistanceDisplay: 30;
    bufferDistance: Observable<number>;
    bufferDistanceControl = new Control();

    constructor() {
        this.bufferDistance = this.bufferDistanceControl.valueChanges
            .debounceTime(200)
            .distinctUntilChanged()
            .subscribe(n => this.startAnalysis(n));
    }

    setView(viewRef) {
        this.viewReference = viewRef;
        this.volcanoesLayer = this.viewReference.map.getLayer('volcanoesLayer');
        this.volcanoesLayerView = this.viewReference.getLayerView(this.volcanoesLayer); // this is used to access graphics array
        this.analysisLayer = this.viewReference.map.getLayer('analysisLayer');
    }

    startAnalysis(bufferDistance) {
        if (!this.volcanoesLayerView) {
            // just in case this wasn't ready or available in setView method
            this.volcanoesLayerView = this.viewReference.getLayerView(this.volcanoesLayer);
        }

        // STEP 0.A
        // filter to get point geometries within the current view extent
        var geoms = this.volcanoesLayerView.graphics.map(g => g.geometry);
        var geomsInExtent = geoms.filter(geom => this.viewReference.extent.contains(geom));

        // STEP 0.B
        // update template bindings
        this.bufferDistanceDisplay = bufferDistance;
        this.featureCount = geomsInExtent.length;

        // STEP 1
        // calculate the geodesic buffer geometry with unioned outputs
        geometryEngineAsync.geodesicBuffer(geomsInExtent.items, bufferDistance, 'kilometers', true).then(function(bufferGeometries) {
            var bufferGeometry = bufferGeometries[0];

            // STEP 1.A
            // calculate area and update template binding
            geometryEngineAsync.geodesicArea(bufferGeometry, 'square-kilometers').then(function(res) {
                this.bufferPolygonSize = res;
            }.bind(this));

            // STEP 1.B
            // create a graphic to display the new unioned buffer geometry
            var bufferGraphic = new Graphic({
                geometry: bufferGeometry,
                symbol: new SimpleFillSymbol({
                    color: [227, 139, 79, 0.7],
                    outline: new SimpleLineSymbol({
                        color: [255, 255, 255],
                        width: 1
                    })
                })
            });

            // STEP 2
            // calculate the convex hull geometry
            geometryEngineAsync.convexHull(bufferGeometry, true).then(function(convexHullGeometry) {
                
                // STEP 2.A
                // calculate area and update template binding
                geometryEngineAsync.geodesicArea(convexHullGeometry, 'square-kilometers').then(function(res) {
                    this.convexHullPolygonSize = res;
                }.bind(this));

                // STEP 2.B
                // create a graphic to display the new convex hull geometry
                var convexHullGraphic = new Graphic({
                    geometry: convexHullGeometry,
                    symbol: new SimpleFillSymbol({
                        color: [255, 255, 255, 0],
                        outline: new SimpleLineSymbol({
                            color: [255, 255, 255],
                            width: 2
                        })
                    })
                });
                
                // STEP 3
                // add both the buffer and convex hull graphics to the map
                this.addAnalysisResultsToMap(bufferGraphic, convexHullGraphic)
            }.bind(this));

        }.bind(this));
    }

    addAnalysisResultsToMap(...analysisGraphics) {
        this.analysisLayer.clear();
        this.analysisLayer.add(analysisGraphics);
    }
}
