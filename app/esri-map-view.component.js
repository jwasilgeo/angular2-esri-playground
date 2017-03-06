System.register(["@angular/core", "./map.service", "esri/views/MapView"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, map_service_1, MapView_1, EsriMapViewComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            },
            function (MapView_1_1) {
                MapView_1 = MapView_1_1;
            }
        ],
        execute: function () {
            EsriMapViewComponent = (function () {
                function EsriMapViewComponent(_mapService, elRef) {
                    this._mapService = _mapService;
                    this.elRef = elRef;
                    this.viewCreated = new core_1.EventEmitter();
                    this.view = null;
                }
                EsriMapViewComponent.prototype.ngOnInit = function () {
                    this.view = new MapView_1.default({
                        container: this.elRef.nativeElement.firstChild,
                        map: this._mapService.map,
                        zoom: this.zoom,
                        center: [this.centerLng, this.centerLat],
                        rotation: this.rotation
                    });
                    this.view.then(function (view) {
                        this.viewCreated.next(view);
                    }.bind(this));
                };
                return EsriMapViewComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], EsriMapViewComponent.prototype, "zoom", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], EsriMapViewComponent.prototype, "centerLng", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], EsriMapViewComponent.prototype, "centerLat", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], EsriMapViewComponent.prototype, "rotation", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], EsriMapViewComponent.prototype, "viewCreated", void 0);
            EsriMapViewComponent = __decorate([
                core_1.Component({
                    selector: 'esri-map-view',
                    template: '<div></div>',
                    providers: [map_service_1.AnalysisMapService]
                }),
                __metadata("design:paramtypes", [map_service_1.AnalysisMapService,
                    core_1.ElementRef])
            ], EsriMapViewComponent);
            exports_1("EsriMapViewComponent", EsriMapViewComponent);
        }
    };
});
//# sourceMappingURL=esri-map-view.component.js.map