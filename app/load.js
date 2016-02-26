var deps = [
    'esri/geometry/Point',
    'esri/geometry/geometryEngineAsync',
    'esri/layers/GraphicsLayer',
    'esri/layers/VectorTileLayer',
    'esri/Map',
    'esri/views/MapView',
    'esri/views/SceneView'
];
var moduleName = function (name) { return name.match(/[^\/]+$/).shift(); };
System.config({
    packages: {
        app: {
            defaultExtension: 'js'
        }
    }
});
function register(name, mods) {
    System.register(name, [], function (exp) {
        return {
            setters: [],
            execute: function () {
                mods.map(function (mod, idx) {
                    exp(moduleName(deps[idx]), mod);
                });
            }
        };
    });
}
// this is actually Dojo require, not System require
require(deps, function () {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i - 0] = arguments[_i];
    }
    register('esri-mods', modules);
    // bootstrap the app
    System.import('app/main')
        .then(null, console.error.bind(console));
});
//# sourceMappingURL=load.js.map