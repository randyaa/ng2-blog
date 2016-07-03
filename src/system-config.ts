// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
  //'@angular2-material':'vendor/@angular2-material',
  '@angular2-material/button':'https://npmcdn.com/@angular2-material/button@2.0.0-alpha.6/',
  '@angular2-material/card':'https://npmcdn.com/@angular2-material/card@2.0.0-alpha.6/',
  '@angular2-material/checkbox':'https://npmcdn.com/@angular2-material/checkbox@2.0.0-alpha.6/',
  '@angular2-material/core':'https://npmcdn.com/@angular2-material/core@2.0.0-alpha.6/',
  '@angular2-material/grid-list':'https://npmcdn.com/@angular2-material/grid-list@2.0.0-alpha.6/',
  '@angular2-material/icon':'https://npmcdn.com/@angular2-material/icon@2.0.0-alpha.6/',
  '@angular2-material/input':'https://npmcdn.com/@angular2-material/input@2.0.0-alpha.6/',
  '@angular2-material/list':'https://npmcdn.com/@angular2-material/list@2.0.0-alpha.6/',
  '@angular2-material/progress-bar':'https://npmcdn.com/@angular2-material/progress-bar@2.0.0-alpha.6/',
  '@angular2-material/progress-circle':'https://npmcdn.com/@angular2-material/progress-circle@2.0.0-alpha.6/',
  '@angular2-material/radio':'https://npmcdn.com/@angular2-material/radio@2.0.0-alpha.6/',
  '@angular2-material/sidenav':'https://npmcdn.com/@angular2-material/sidenav@2.0.0-alpha.6/',
  '@angular2-material/slide-toggle':'https://npmcdn.com/@angular2-material/slide-toggle@2.0.0-alpha.6/',
  '@angular2-material/tabs':'https://npmcdn.com/@angular2-material/tabs@2.0.0-alpha.6/',
  '@angular2-material/toolbar':'https://npmcdn.com/@angular2-material/toolbar@2.0.0-alpha.6/',
  //'firebase': 'vendor/firebase/lib/firebase-web.js',
  'firebase': 'https://npmcdn.com/firebase@2.4.2/lib/firebase-web.js',
  //'angularfire2': 'vendor/angularfire2'
  'angularfire2': 'https://npmcdn.com/angularfire2@2.0.0-beta.2/',
};
/** User packages configuration. */
var packages = {
  angularfire2: {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'angularfire2.js'
  },
  '@angular2-material/button': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'button.js'
  },
  '@angular2-material/card': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'card.js'
  },
  '@angular2-material/checkbox': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'checkbox.js'
  },
  '@angular2-material/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/grid-list': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'grid-list.js'
  },
  '@angular2-material/icon': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'icon.js'
  },
  '@angular2-material/input': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'input.js'
  },
  '@angular2-material/list': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'list.js'
  },
  '@angular2-material/progress-bar': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'progress-bar.js'
  },
  '@angular2-material/progress-circle': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'progress-circle.js'
  },
  '@angular2-material/radio': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'radio.js'
  },
  '@angular2-material/sidenav': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'sidenav.js'
  },
  '@angular2-material/slide-toggle': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'slide-toggle.js'
  },
  '@angular2-material/tabs': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'tabs.js'
  },
  '@angular2-material/toolbar': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'toolbar.js'
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/router-deprecated',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    //'@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    //'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.8/',
    'main': 'main.js',

    '@angular/core': 'https://npmcdn.com/@angular/core@2.0.0-rc.3/',
    '@angular/common': 'https://npmcdn.com/@angular/common@2.0.0-rc.3/',
    '@angular/compiler': 'https://npmcdn.com/@angular/compiler@2.0.0-rc.3/',
    '@angular/http': 'https://npmcdn.com/@angular/http@2.0.0-rc.3/',
    '@angular/router': 'https://npmcdn.com/@angular/router@2.0.0-rc.3/',
    '@angular/platform-browser': 'https://npmcdn.com/@angular/platform-browser@2.0.0-rc.3/',
    '@angular/platform-browser-dynamic': 'https://npmcdn.com/@angular/platform-browser-dynamic@2.0.0-rc.3/',
    '@angular/router-deprecated': 'https://npmcdn.com/@angular/router-deprecated@2.0.0-rc.2/',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
