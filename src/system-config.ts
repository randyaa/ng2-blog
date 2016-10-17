/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
  //'@angular2-material':'vendor/@angular2-material',
  '@angular2-material/button':'https://unpkg.com/@angular2-material/button@2.0.0-alpha.5-2/',
  '@angular2-material/card':'https://unpkg.com/@angular2-material/card@2.0.0-alpha.5-2/',
  '@angular2-material/checkbox':'https://unpkg.com/@angular2-material/checkbox@2.0.0-alpha.5-2/',
  '@angular2-material/core':'https://unpkg.com/@angular2-material/core@2.0.0-alpha.5-2/',
  '@angular2-material/grid-list':'https://unpkg.com/@angular2-material/grid-list@2.0.0-alpha.5-2/',
  '@angular2-material/icon':'https://unpkg.com/@angular2-material/icon@2.0.0-alpha.5-2/',
  '@angular2-material/input':'https://unpkg.com/@angular2-material/input@2.0.0-alpha.5-2/',
  '@angular2-material/list':'https://unpkg.com/@angular2-material/list@2.0.0-alpha.5-2/',
  '@angular2-material/progress-bar':'https://unpkg.com/@angular2-material/progress-bar@2.0.0-alpha.5-2/',
  '@angular2-material/progress-circle':'https://unpkg.com/@angular2-material/progress-circle@2.0.0-alpha.5-2/',
  '@angular2-material/radio':'https://unpkg.com/@angular2-material/radio@2.0.0-alpha.5-2/',
  '@angular2-material/sidenav':'https://unpkg.com/@angular2-material/sidenav@2.0.0-alpha.5-2/',
  '@angular2-material/slide-toggle':'https://unpkg.com/@angular2-material/slide-toggle@2.0.0-alpha.5-2/',
  '@angular2-material/tabs':'https://unpkg.com/@angular2-material/tabs@2.0.0-alpha.5-2/',
  '@angular2-material/toolbar':'https://unpkg.com/@angular2-material/toolbar@2.0.0-alpha.5-2/',
  //'firebase': 'vendor/firebase/lib/firebase-web.js',
  'firebase': 'https://unpkg.com/firebase@2.4.2/lib/firebase-web.js',
  //'angularfire2': 'vendor/angularfire2'
  'angularfire2': 'https://unpkg.com/angularfire2@2.0.0-beta.0/',
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
    //'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.8/',
    'main': 'main.js',

    '@angular/core': 'https://unpkg.com/@angular/core@2.0.0-rc.1/',
    '@angular/common': 'https://unpkg.com/@angular/common@2.0.0-rc.1/',
    '@angular/compiler': 'https://unpkg.com/@angular/compiler@2.0.0-rc.1/',
    '@angular/http': 'https://unpkg.com/@angular/http@2.0.0-rc.1/',
    '@angular/router': 'https://unpkg.com/@angular/router@2.0.0-rc.1/',
    '@angular/router-deprecated': 'https://unpkg.com/@angular/router-deprecated@2.0.0-rc.1/',
    '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser@2.0.0-rc.1/',
    '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic@2.0.0-rc.1/',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
