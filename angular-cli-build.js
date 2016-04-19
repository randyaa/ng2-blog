/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: [
        '@ngrx/store/**/*',
        '@ngrx/devtools/**/*',
        '@angular2-material/**/*',
    ]
  });
  return app.toTree();
};
