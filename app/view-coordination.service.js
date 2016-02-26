System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ViewCoordinationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ViewCoordinationService = (function () {
                // sceneView: null;
                function ViewCoordinationService() {
                    this.camera = null;
                    this.center = null;
                    this.zoom = null;
                    this.rotation = null;
                    this.zoom = 15;
                    this.center = [19.937, 50.061];
                    this.rotation = 0;
                }
                /*setSceneView(view) {
                    this.sceneView = view;
                }*/
                ViewCoordinationService.prototype.setValue = function (newVal, propertyName) {
                    if (propertyName === 'center') {
                        newVal = [newVal.longitude, newVal.latitude];
                    }
                    this['_set' + propertyName](newVal);
                };
                ViewCoordinationService.prototype._setcamera = function (val) {
                    this.camera = val;
                };
                ViewCoordinationService.prototype._setzoom = function (val) {
                    this.zoom = val;
                };
                ViewCoordinationService.prototype._setcenter = function (lngLat) {
                    this.center = lngLat;
                };
                ViewCoordinationService.prototype._setrotation = function (val) {
                    this.rotation = val;
                };
                ViewCoordinationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ViewCoordinationService);
                return ViewCoordinationService;
            }());
            exports_1("ViewCoordinationService", ViewCoordinationService);
        }
    }
});
//# sourceMappingURL=view-coordination.service.js.map