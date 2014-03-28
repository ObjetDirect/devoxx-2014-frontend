/*jshint camelcase: false*/
/*global requirejs: true, require: true, console: true */

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    'baseUrl': '/base/src',

    'paths': {
        // Global definition for ou application
        'app': '../src/javascripts',
        'app/template': '../src/templates',
        'app/nls': '../src/nls',
        'app/frameworks': '../frameworks',

        // RequireJs plugins
        'text': '../src/frameworks/requirejs-text/text',
        'i18n': '../src/frameworks/requirejs-i18n/i18n',
        'tpl': '../src/frameworks/requirejs-tpl/tpl',

        // Core frameworks
        'jquery': '../src/frameworks/jquery/jquery',
        'underscore': '../src/frameworks/underscore/underscore',
        'backbone': '../src/frameworks/backbone/backbone',
        'backbone.wreqr': '../src/frameworks/backbone.wreqr/backbone.wreqr',
        'backbone.babysitter': '../src/frameworks/backbone.babysitter/backbone.babysitter',
        'marionette': '../src/frameworks/backbone.marionette/backbone.marionette'
    },

    'tpl': {
        extension: '.tmpl' // default = '.html'
    },

    // To force ordered loading
    // See https://github.com/jrburke/requirejs/wiki/Upgrading-to-RequireJS-2.0#wiki-shim
    'shim': {
        'marionette': {
            'deps': ['backbone'],
            'exports': 'Marionette'
        },
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        },
        'underscore': {
            'exports': '_'
        },
        'jquery': {
            'exports': 'jQuery'
        }
    },

    // ask Require.js to load these files (all our tests)
    'deps': tests,

    // start test run, once Require.js is done
    'callback': window.__karma__.start
});