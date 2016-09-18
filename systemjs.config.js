(function(global) {
    var ngVersion = '@2.0.0'; // establish the angular version
    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        '@angular': 'https://unpkg.com/@angular',
        'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.12'
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
    // Add map entries for each angular package including the ngVersion
    ngPackageNames.forEach(function(pkgName) {
        map['@angular/' + pkgName] = 'https://unpkg.com/@angular/' + pkgName + ngVersion;
    });
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
