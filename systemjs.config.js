(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    };
    var ngPackageNames = [
        'core',
        'common',
        'compiler',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];
    // Add package entries for angular packages
    ngPackageNames.forEach(function(packageName) {
        packages['@angular/' + packageName] = {
            main: 'bundles/' + packageName + '.umd.js',
            defaultExtension: 'js'
        };
    });
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
