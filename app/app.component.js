System.register(['angular2/core', 'angular2/router', './intro.component', './synced-views.component', './geometry-engine-showcase.component'], function(exports_1, context_1) {
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
    var core_1, router_1, intro_component_1, synced_views_component_1, geometry_engine_showcase_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (synced_views_component_1_1) {
                synced_views_component_1 = synced_views_component_1_1;
            },
            function (geometry_engine_showcase_component_1_1) {
                geometry_engine_showcase_component_1 = geometry_engine_showcase_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/intro',
                            name: 'Intro',
                            component: intro_component_1.IntroComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/synced-views',
                            name: 'SyncedViews',
                            component: synced_views_component_1.SyncedViewsComponent
                        },
                        {
                            path: '/geom-engine-showcase',
                            name: 'GeometryEngineShowcase',
                            component: geometry_engine_showcase_component_1.GeometryEngineShowcaseComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'playground-app',
                        styles: ["\n        section {\n            width: 90%;\n            max-width: 1200px;\n            margin: 0 auto;\n            padding: 4em 0 0 0;\n        }\n        "],
                        template: "\n        <nav>\n            <a href=\"#\" class=\"brand\">\n                <span>Angular 2 + Esri 4</span>\n            </a>\n\n            <!-- responsive-->\n            <input id=\"bmenub\" type=\"checkbox\" class=\"show\">\n            <label for=\"bmenub\" class=\"burger pseudo button\">\u2261</label>\n\n            <div class=\"menu\">\n                <a class=\"pseudo button\" [routerLink]=\"['Intro']\">Intro</a>\n                <a class=\"button\" [routerLink]=\"['SyncedViews']\">Synced 3D Views</a>\n                <a class=\"button\" [routerLink]=\"['GeometryEngineShowcase']\">Geometry Engine</a>\n\n                <a class=\"pseudo button\" href=\"https://github.com/jwasilgeo/angular2-esri-playground\">Github</a>\n                <a class=\"pseudo button\" href=\"https://twitter.com/JWasilGeo\">@JWasilGeo</a>\n            </div>\n        </nav>\n        <main>\n            <section>\n                <router-outlet></router-outlet>\n            </section>\n        </main>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map