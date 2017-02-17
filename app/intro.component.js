System.register(['@angular/core'], function(exports_1, context_1) {
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
    var IntroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IntroComponent = (function () {
                function IntroComponent() {
                }
                IntroComponent = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        template: "\n        <div class=\"flex four\">\n            <div></div>\n\n            <div class=\"half\">\n            \n                <article class=\"card\">\n                    <header>\n                        <h3>Awesome Features</h3>\n                    </header>\n                    <ul>\n                        <li><a href=\"https://js.arcgis.com/\">Esri 4.x JSAPI</a> for 2D and 3D mapping</li>\n                        <li><a href=\"https://github.com/Esri/esri-system-js\">esri-system-js</a> for loading Esri modules in SystemJS</li>\n                        <li>Angular 2 app with routing\n                            <ul>\n                                <li>MapView and SceneView components</li>\n                                <li>Custom view coordination service to keep SceneView components in sync</li>\n                                <li>Vector GIS analysis in the browser with reactive forms</li>\n                            </ul>\n                        </li>\n                        <li>and <a href=\"http://picnicss.com/\">Picnic CSS</a> for the looks</li>\n                    </ul>\n                </article>\n\n            </div>\n\n            <div></div>\n        </div>\n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], IntroComponent);
                return IntroComponent;
            }());
            exports_1("IntroComponent", IntroComponent);
        }
    }
});
//# sourceMappingURL=intro.component.js.map