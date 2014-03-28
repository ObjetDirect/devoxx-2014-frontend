/*global require: true */

/**
 * A module to configure RequireJs and run the application
 *
 * @module app/main
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

// RequireJs configuration
require.config({
    'paths': {
        // Global definition for ou application
        'app': '.',
        'app/template': '../templates',
        'app/nls': '../nls',
        'app/frameworks': '../frameworks',

        // RequireJs plugins
        'text': '../frameworks/requirejs-text/text',
        'i18n': '../frameworks/requirejs-i18n/i18n',
        'tpl': '../frameworks/requirejs-tpl/tpl',

        // Core frameworks
        'jquery': '../frameworks/jquery/jquery',
        'underscore': '../frameworks/underscore/underscore',
        'backbone': '../frameworks/backbone/backbone',
        'backbone.wreqr': '../frameworks/backbone.wreqr/backbone.wreqr',
        'backbone.babysitter': '../frameworks/backbone.babysitter/backbone.babysitter',
        'marionette': '../frameworks/backbone.marionette/backbone.marionette'
    },

    'waitSeconds': 15, // Wait 15 seconds before generating a timeout

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
    }
});

// Now we require needed dependencies to load and start the application
require(
    [
        'jquery',
        'app/app',
        'app/routing/definitions'
    ],
    function (Backbone, app) {
        // Start the application
        $(document).ready(function () {
            // Start the application
            console.log('We can start now our application !');

            app.start();
        });
    }
);