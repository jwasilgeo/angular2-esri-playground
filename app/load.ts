declare var System: any;

const deps = [
    'esri/geometry/Point',
    'esri/geometry/geometryEngineAsync',
    'esri/layers/GraphicsLayer',
    'esri/layers/VectorTileLayer',
    'esri/Map',
    'esri/views/MapView',
    'esri/views/SceneView'
];
const moduleName = (name) => name.match(/[^\/]+$/).shift();

System.config({
    packages: {
        app: {
            defaultExtension: 'js'
        }
    }
});

function register(name: string, mods: any[]) {
    System.register(name, [], exp => {
        return {
            setters: [],
            execute: () => {
                mods.map((mod: any, idx: number) => {
                    exp(moduleName(deps[idx]), mod);
                });
            }
        }
    });
}

// this is actually Dojo require, not System require
require(deps, function(...modules) {
    register('esri-mods', modules);

    // bootstrap the app
    System.import('app/main')
        .then(null, console.error.bind(console));
});
