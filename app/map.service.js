System.register(["@angular/core", "esri/Map", "esri/layers/FeatureLayer", "esri/layers/GraphicsLayer"], function (exports_1, context_1) {
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
    var core_1, Map_1, FeatureLayer_1, GraphicsLayer_1, SimpleMapService, AnalysisMapService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Map_1_1) {
                Map_1 = Map_1_1;
            },
            function (FeatureLayer_1_1) {
                FeatureLayer_1 = FeatureLayer_1_1;
            },
            function (GraphicsLayer_1_1) {
                GraphicsLayer_1 = GraphicsLayer_1_1;
            }
        ],
        execute: function () {
            SimpleMapService = (function () {
                function SimpleMapService() {
                    this.map = null;
                    this.map = new Map_1.default({
                        basemap: 'satellite',
                        ground: 'world-elevation'
                    });
                }
                return SimpleMapService;
            }());
            SimpleMapService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], SimpleMapService);
            exports_1("SimpleMapService", SimpleMapService);
            AnalysisMapService = (function () {
                function AnalysisMapService() {
                    this.map = null;
                    this.map = new Map_1.default({
                        basemap: 'dark-gray-vector',
                        layers: [
                            new GraphicsLayer_1.default({
                                id: 'analysisLayer'
                            }),
                            new FeatureLayer_1.default({
                                url: 'https://services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/World_Volcanoes/FeatureServer/0',
                                id: 'volcanoesLayer'
                            })
                        ]
                    });
                }
                return AnalysisMapService;
            }());
            AnalysisMapService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], AnalysisMapService);
            exports_1("AnalysisMapService", AnalysisMapService);
        }
    };
});
//# sourceMappingURL=map.service.js.map