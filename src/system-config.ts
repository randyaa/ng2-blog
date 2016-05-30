/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
  "@angular2-material":"vendor/@angular2-material",

};
/** User packages configuration. */
var packages = {
  '@angular2-material/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/checkbox': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'checkbox.js'
  },
  '@angular2-material/button': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'button.js'
  },
  '@angular2-material/radio': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'radio.js'
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
  '@angular2-material/card': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'card.js'
  },
  '@angular2-material/toolbar': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'toolbar.js'
  },
  '@angular2-material/sidenav': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'sidenav.js'
  },
  '@angular2-material/progress-circle': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'progress-circle.js'
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
    'main': 'main.js',

    //'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.8/',
    '@angular/core': 'https://npmcdn.com/@angular/core@2.0.0-rc.1/',
    '@angular/common': 'https://npmcdn.com/@angular/common@2.0.0-rc.1/',
    '@angular/compiler': 'https://npmcdn.com/@angular/compiler@2.0.0-rc.1/',
    '@angular/http': 'https://npmcdn.com/@angular/http@2.0.0-rc.1/',
    '@angular/router': 'https://npmcdn.com/@angular/router@2.0.0-rc.1/',
    '@angular/router-deprecated': 'https://npmcdn.com/@angular/router-deprecated@2.0.0-rc.1/',
    '@angular/platform-browser': 'https://npmcdn.com/@angular/platform-browser@2.0.0-rc.1/',
    '@angular/platform-browser-dynamic': 'https://npmcdn.com/@angular/platform-browser-dynamic@2.0.0-rc.1/',
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
