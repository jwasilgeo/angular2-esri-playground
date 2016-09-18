(function(global) {
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
        'core@2.0.0',
        'common@2.0.0',
        'compiler@2.0.0',
        'forms@2.0.0',
        'http@2.0.0',
        'platform-browser@2.0.0',
        'platform-browser-dynamic@2.0.0',
        'router@3.0.0'
    ];
    // Add map entries for each angular package including the ngVersion
    ngPackageNames.forEach(function(pkgName) {
        map['@angular/' + pkgName] = 'https://unpkg.com/@angular/' + pkgName;
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
