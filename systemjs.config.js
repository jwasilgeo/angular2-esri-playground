(function(global) {
    var ngVersion = '@2.0.0-rc.1'; // establish the angular version
    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        '@angular': 'https://npmcdn.com/@angular',
        'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'esri-mods': {
            defaultExtension: 'js'
        }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];
    // Add map entries for each angular package including the ngVersion
    ngPackageNames.forEach(function(pkgName) {
        map['@angular/' + pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVersion;
    });
    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/' + pkgName] = {
            main: pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    });
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
