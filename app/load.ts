declare var System: any;
declare var esriSystem: any;

// load Esri modules with the help of esri-system-js library
// into a System.js module called esri-mods
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
    // System.import('app/main')
    System.import('app')
        .then(null, console.error.bind(console));
}, {
    outModuleName: 'esri-mods'
});
