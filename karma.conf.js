/*jshint node:true, strict:false */
/*global module: true */

// Karma configuration

/**
 * Karma configuration
 * For running tests under PhantomJs, Chrome ... with Jasmine.
 * For generating reports compliant for jUnit, CheckStyle, Cobertura ...
 */
module.exports = function (config) {
    'use strict';

    config.set({

        // base path, that will be used to resolve files and exclude
        'basePath': './',

        // frameworks to use
        'frameworks': ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        'files': [
            'test/require.conf.js',
            {pattern: 'src/**/*', included: false},
            {pattern: 'test/**/*Spec.js', included: false}
        ],

        // list of files to exclude
        'exclude': [
            'src/javascripts/main.js'
        ],

        // Plugins
        'plugins': [ // See http://stackoverflow.com/questions/16905945/can-you-define-custom-plugins-for-karma-runner
            'karma-jasmine',
            'karma-requirejs',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        // Preprocessors
        'preprocessors': {
            'src/javascripts/**/*.js': 'coverage'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        'reporters': ['progress', 'coverage'],

        // web server port
        'port': 9876,

        // cli runner port
        'runnerPort': 9100,

        // enable / disable colors in the output (reporters and logs)
        'colors': true,

        // level of logging
        // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
        'logLevel': config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        'autoWatch': false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        'browsers': ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        'captureTimeout': 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        'singleRun': true
    });
};