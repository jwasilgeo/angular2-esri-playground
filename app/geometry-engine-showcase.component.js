System.register(["@angular/core", "@angular/forms", "rxjs/add/operator/debounceTime", "rxjs/add/operator/distinctUntilChanged", "esri/geometry/geometryEngineAsync", "esri/Graphic", "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, geometryEngineAsync_1, Graphic_1, SimpleFillSymbol_1, SimpleLineSymbol_1, GeometryEngineShowcaseComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (geometryEngineAsync_1_1) {
                geometryEngineAsync_1 = geometryEngineAsync_1_1;
            },
            function (Graphic_1_1) {
                Graphic_1 = Graphic_1_1;
            },
            function (SimpleFillSymbol_1_1) {
                SimpleFillSymbol_1 = SimpleFillSymbol_1_1;
            },
            function (SimpleLineSymbol_1_1) {
                SimpleLineSymbol_1 = SimpleLineSymbol_1_1;
            }
        ],
        execute: function () {
            GeometryEngineShowcaseComponent = (function () {
                function GeometryEngineShowcaseComponent() {
                    this.featureCount = 0;
                    this.bufferPolygonSize = 0;
                    this.convexHullPolygonSize = 0;
                    this.bufferDistanceDisplay = 30;
                    this.analysisDone = true;
                    this.analysisDebouncing = false;
                    this.analysisWorking = false;
                }
                GeometryEngineShowcaseComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.gisInputForm = new forms_1.FormGroup({
                        bufferDistance: new forms_1.FormControl(this.bufferDistanceDisplay)
                    });
                    // when use moves slider
                    // 1) live update UI
                    this.gisInputForm.controls.bufferDistance
                        .valueChanges
                        .subscribe(function (n) {
                        _this.bufferDistanceDisplay = n;
                        // update label class bindings
                        _this.analysisDone = false;
                        _this.analysisDebouncing = true;
                    });
                    // 2) start analysis after user is done sliding
                    this.gisInputForm.controls.bufferDistance
                        .valueChanges
                        .debounceTime(250)
                        .distinctUntilChanged()
                        .subscribe(function (n) { return _this.performAnalysis(n); });
                };
                GeometryEngineShowcaseComponent.prototype.setView = function (viewRef) {
                    var _this = this;
                    this.viewReference = viewRef;
                    // inspect layers in the map to create layer or layerView references
                    this.viewReference.map.layers.forEach(function (layer) {
                        // here we need a layerView reference
                        if (layer.id === 'volcanoesLayer') {
                            _this.viewReference.whenLayerView(layer).then(function (layerView) {
                                layerView.watch('updating', function (val) {
                                    if (!val) {
                                        // wait for the layer view to finish updating
                                        layerView.queryFeatures().then(function (featureSet) {
                                            // establish initial volcanoGeoms array for use in performAnalysis
                                            _this.volcanoGeoms = featureSet.map(function (feature) { return feature.geometry; });
                                        });
                                    }
                                });
                            });
                        }
                        // here we just need a layer reference
                        if (layer.id === 'analysisLayer') {
                            _this.analysisLayer = layer;
                        }
                    });
                };
                GeometryEngineShowcaseComponent.prototype.performAnalysis = function (bufferDistance) {
                    var _this = this;
                    // update label class bindings
                    this.analysisDebouncing = false;
                    this.analysisWorking = true;
                    // STEP 0.A
                    // filter to get point geometries within the current view extent
                    var geomsInExtent = this.volcanoGeoms.filter(function (geom) { return _this.viewReference.extent.contains(geom); });
                    // STEP 0.B
                    // update template bindings
                    // this.bufferDistanceDisplay = bufferDistance;
                    this.featureCount = geomsInExtent.length;
                    // STEP 1
                    // calculate the geodesic buffer geometry with unioned outputs
                    geometryEngineAsync_1.default.geodesicBuffer(geomsInExtent, bufferDistance, 'kilometers', true).then(function (bufferGeometries) {
                        var bufferGeometry = bufferGeometries[0];
                        // STEP 1.A
                        // calculate area and update template binding
                        geometryEngineAsync_1.default.geodesicArea(bufferGeometry, 'square-kilometers').then(function (res) {
                            _this.bufferPolygonSize = res;
                        });
                        // STEP 1.B
                        // create a graphic to display the new unioned buffer geometry
                        var bufferGraphic = new Graphic_1.default({
                            geometry: bufferGeometry,
                            symbol: new SimpleFillSymbol_1.default({
                                color: [227, 139, 79, 0.7],
                                outline: new SimpleLineSymbol_1.default({
                                    color: [255, 255, 255],
                                    width: 1
                                })
                            })
                        });
                        // STEP 2
                        // calculate the convex hull geometry
                        geometryEngineAsync_1.default.convexHull(bufferGeometry, true).then(function (convexHullGeometry) {
                            // STEP 2.A
                            // calculate area and update template binding
                            geometryEngineAsync_1.default.geodesicArea(convexHullGeometry, 'square-kilometers').then(function (res) {
                                _this.convexHullPolygonSize = res;
                            });
                            // STEP 2.B
                            // create a graphic to display the new convex hull geometry
                            var convexHullGraphic = new Graphic_1.default({
                                geometry: convexHullGeometry,
                                symbol: new SimpleFillSymbol_1.default({
                                    color: [255, 255, 255, 0],
                                    outline: new SimpleLineSymbol_1.default({
                                        color: [255, 255, 255],
                                        width: 2
                                    })
                                })
                            });
                            // STEP 3
                            // add both the buffer and convex hull graphics to the map
                            _this.addAnalysisResultsToMap(bufferGraphic, convexHullGraphic);
                        });
                    });
                };
                GeometryEngineShowcaseComponent.prototype.addAnalysisResultsToMap = function () {
                    var analysisGraphics = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        analysisGraphics[_i] = arguments[_i];
                    }
                    this.analysisLayer.removeAll();
                    this.analysisLayer.addMany(analysisGraphics);
                    // update label class bindings
                    this.analysisDone = true;
                    this.analysisWorking = false;
                };
                return GeometryEngineShowcaseComponent;
            }());
            GeometryEngineShowcaseComponent = __decorate([
                core_1.Component({
                    selector: 'geometry-engine-showcase',
                    styles: ["\n        .workflow {\n            font-style: italic;\n            font-size: 0.8em;\n        }\n        .range-slider {\n            margin: 0 10px;\n            max-width: 200px;\n            vertical-align: middle;\n        }\n        .label-override {\n            margin-left: 0;\n            margin-right: 1em;\n            font-size: 0.9em;\n        }\n        .card pre {\n            margin: 0 15px 20px 15px;\n            width: auto;\n        }\n        "],
                    template: "\n        <h4>Vector GIS analysis with Esri's client-side geometry engine</h4>\n\n        <esri-map-view #mapView (viewCreated)=\"setView(mapView.view)\"\n            zoom=\"5\" centerLng=\"-18.5\" centerLat=\"65\" rotation=\"180\">\n        </esri-map-view>\n\n        <span class=\"workflow\">Workflow: create geodesic buffer &rarr; create convex hull &rarr; calculate buffer and convex hull areas</span>\n\n        <p>Change the buffer distance to begin:</p>\n\n        <div [formGroup]=\"gisInputForm\">\n            <input type=\"range\"\n                min=\"10\" max=\"300\" step=\"5\"\n                class=\"range-slider\"\n                formControlName=\"bufferDistance\" />\n            <span class=\"label label-override\" [ngClass]=\"{'success': analysisDone, 'warning': analysisDebouncing, 'error': analysisWorking}\">\n                {{ bufferDistanceDisplay }} km\n            </span>\n        </div>\n\n        <ul>\n            <li>volcanoes buffered in extent: {{ featureCount }}</li>\n            <li>unioned buffer area: {{ bufferPolygonSize | number:'1.1-1' }} km<sup>2</sup></li>\n            <li>convex hull area: {{ convexHullPolygonSize | number:'1.1-1' }} km<sup>2</sup></li>\n        </ul>\n\n        <div class=\"card\">\n            <p><span class=\"label label-override\">Info</span>This Esri map view was created with a custom Angular 2 component with several <code>@Input</code> bindings and an <code>EventEmitter()</code> event binding:</p>\n            <pre>\n<code>&lt;esri-map-view #mapView (viewCreated)=\"setView(mapView.view)\"\n    zoom=\"5\" centerLng=\"-18.5\" centerLat=\"65\" rotation=\"180\"&gt;\n&lt;/esri-map-view&gt;</code>\n            </pre>\n        </div>\n        "
                })
            ], GeometryEngineShowcaseComponent);
            exports_1("GeometryEngineShowcaseComponent", GeometryEngineShowcaseComponent);
        }
    };
});
//# sourceMappingURL=geometry-engine-showcase.component.js.map