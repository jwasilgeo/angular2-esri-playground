declare var System: any;
declare var esriSystem: any;

// configure SystemJS
System.config({
    packages: {
        app: {
            defaultExtension: 'js'
        }
    }
});

// load Esri modules with the help of esri-system-js library
esriSystem.register([
    'esri/geometry/Point',
    'esri/geometry/geometryEngineAsync',
    
    'esri/Graphic',
    
    'esri/layers/FeatureLayer',
    'esri/layers/GraphicsLayer',
    
    'esri/Map',
    
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/SimpleFillSymbol',

    'esri/views/MapView',
    'esri/views/SceneView'
], function() {
    // bootstrap the app
    System.import('app/main')
        .then(null, console.error.bind(console));
}, {
    outModuleName: 'esri-mods'
});
