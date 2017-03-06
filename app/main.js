System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/platform-browser-dynamic", "@angular/router", "./app.component", "./intro.component", "./synced-views.component", "./esri-scene-view.component", "./geometry-engine-showcase.component", "./esri-map-view.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, platform_browser_dynamic_1, router_1, app_component_1, intro_component_1, synced_views_component_1, esri_scene_view_component_1, geometry_engine_showcase_component_1, esri_map_view_component_1, routes, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (synced_views_component_1_1) {
                synced_views_component_1 = synced_views_component_1_1;
            },
            function (esri_scene_view_component_1_1) {
                esri_scene_view_component_1 = esri_scene_view_component_1_1;
            },
            function (geometry_engine_showcase_component_1_1) {
                geometry_engine_showcase_component_1 = geometry_engine_showcase_component_1_1;
            },
            function (esri_map_view_component_1_1) {
                esri_map_view_component_1 = esri_map_view_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                {
                    path: '',
                    redirectTo: '/intro',
                    pathMatch: 'full'
                }, {
                    path: 'intro',
                    component: intro_component_1.IntroComponent
                }, {
                    path: 'synced-views',
                    component: synced_views_component_1.SyncedViewsComponent
                }, {
                    path: 'geom-engine-showcase',
                    component: geometry_engine_showcase_component_1.GeometryEngineShowcaseComponent
                }
            ];
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.ReactiveFormsModule,
                        router_1.RouterModule.forRoot(routes, { useHash: true })
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        intro_component_1.IntroComponent,
                        synced_views_component_1.SyncedViewsComponent,
                        esri_scene_view_component_1.EsriSceneViewComponent,
                        geometry_engine_showcase_component_1.GeometryEngineShowcaseComponent,
                        esri_map_view_component_1.EsriMapViewComponent
                    ],
                    // providers: [],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map