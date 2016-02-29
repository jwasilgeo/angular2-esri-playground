System.register(['angular2/core', './esri-scene-view.component', './view-coordination.service', './browser-detection.service'], function(exports_1, context_1) {
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
    var core_1, esri_scene_view_component_1, view_coordination_service_1, browser_detection_service_1;
    var SyncedViewsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_scene_view_component_1_1) {
                esri_scene_view_component_1 = esri_scene_view_component_1_1;
            },
            function (view_coordination_service_1_1) {
                view_coordination_service_1 = view_coordination_service_1_1;
            },
            function (browser_detection_service_1_1) {
                browser_detection_service_1 = browser_detection_service_1_1;
            }],
        execute: function() {
            SyncedViewsComponent = (function () {
                function SyncedViewsComponent(_browserSniffer) {
                    this._browserSniffer = _browserSniffer;
                    this.isMobile = false;
                    this.isMobileMessage = null;
                    this.delaySync = false;
                    this.disableSync = false;
                    this.isMobile = _browserSniffer.isMobile();
                    this.isMobileMessage = _browserSniffer.isMobileMessage;
                }
                SyncedViewsComponent.prototype.syncViews = function () {
                    var _this = this;
                    if (!this.disableSync) {
                        this.sceneViewComponents.toArray().forEach(function (svc) { return svc.syncCamera(_this.delaySync); });
                    }
                };
                __decorate([
                    core_1.ViewChildren(esri_scene_view_component_1.EsriSceneViewComponent), 
                    __metadata('design:type', esri_scene_view_component_1.EsriSceneViewComponent)
                ], SyncedViewsComponent.prototype, "sceneViewComponents", void 0);
                SyncedViewsComponent = __decorate([
                    core_1.Component({
                        selector: 'synced-views',
                        styles: ["\n        .label-override {\n            margin-left: 0;\n            margin-right: 1em;\n        }\n        "],
                        template: "\n        <h4 *ngIf=\"isMobile\"><span class=\"label warning label-override\">Warning</span> {{ isMobileMessage }}</h4>\n        \n        <div class=\"tabs two\" *ngIf=\"!isMobile\">\n            <input id='tab-1' type='radio' name='tabgroupB' checked />\n            <label class=\"pseudo button toggle\" for=\"tab-1\" (click)=\"syncViews()\">Scene View 1</label>\n            <input id='tab-2' type='radio' name='tabgroupB'>\n            <label class=\"pseudo button toggle\" for=\"tab-2\" (click)=\"syncViews()\">Scene View 2</label>\n            <div class=\"row\">\n                <div>\n                    <esri-scene-view></esri-scene-view>\n                </div>\n                <div>\n                    <esri-scene-view></esri-scene-view>\n                </div>\n            </div>\n        </div>\n        \n        <p>This example demonstrates two different Esri scene views that share the same Esri map. Explore them by switching between the tabs above.</p>\n        <p>A custom Angular 2 service keeps track of changes in the current view's camera position properties, so that when switching between tabs, the next view you interact with will be in the same position.</p>\n        \n        <div *ngIf=\"!isMobile\">\n            <p>Go ahead\u2014we all know you want to click on stuff\u2014set some options to help illustrate this concept:</p>\n            <label>\n                <input #delaySyncCB type=\"checkbox\" [checked]=\"delaySync\" (change)=\"delaySync = delaySyncCB.checked\" [disabled]=\"disableSync\">\n                <span class=\"checkable\" [style.text-decoration]=\"disableSync ? 'line-through' : 'none'\">Delay syncing</span>\n            </label>\n            <label>\n                <input #disableSyncCB type=\"checkbox\" [checked]=\"disableSync\" (change)=\"disableSync = disableSyncCB.checked\">\n                <span class=\"checkable\">Disable syncing</span>\n            </label>\n        </div>\n        ",
                        directives: [esri_scene_view_component_1.EsriSceneViewComponent],
                        providers: [view_coordination_service_1.ViewCoordinationService, browser_detection_service_1.BrowserDetectionService]
                    }), 
                    __metadata('design:paramtypes', [browser_detection_service_1.BrowserDetectionService])
                ], SyncedViewsComponent);
                return SyncedViewsComponent;
            }());
            exports_1("SyncedViewsComponent", SyncedViewsComponent);
        }
    }
});
//# sourceMappingURL=synced-views.component.js.map