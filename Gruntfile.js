/*jshint node:true, camelcase:false */
/*global module: true */

/**
 * GruntJs configuration
 * To have some specifics tasks:
 *  - grunt clean
 *  - grunt dependencies
 *  - grunt tests
 *  - grunt reports
 *  - grunt server
 *  - grunt dist
 */
var path = require('path');

module.exports = function (grunt) {
    'use strict';

    // Define some global variables:
    var srcFolderPath = './src',
        targetFolderPath = './target',
        tempWebAppBuildPath = targetFolderPath + '/compiled-webapp';

    // Grunt configuration
    grunt.initConfig(
        require('load-grunt-configs')(
            grunt,
            {
                'srcFolderPath': srcFolderPath,
                'targetFolderPath': targetFolderPath,
                'tempWebAppBuildPath': tempWebAppBuildPath,
                'dirname': __dirname
            }
        )
    );

    // A very basic defaukt task.
    grunt.registerTask('default', 'Log some stuff.', function () {
        grunt.log.write('Logging some stuff...').ok();
    });

    // Task for the dependencies
    grunt.registerTask('dependencies', [
        'bower:install'
    ]);

    // Task for the reports
    grunt.registerTask('reports', 'Generate reports', function () {
        //http://stackoverflow.com/questions/15423851/how-do-you-make-grunt-js-not-crash-on-warnings-by-default
        // always use force when watching
        grunt.option('force', true);
        grunt.task.run([
            'clean:reports',
            'jsdoc',
            'jshint',
            'lesslint'
        ]);
    });

    // Task for the tests
    grunt.registerTask('tests', [
        'clean:tests',
        'karma'
    ]);

    // Task for the server (live reload)
    // Creates the `server` task
    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
    ]);

    // Task for the distribution
    grunt.registerTask('dist', [
        // -- Clean & copy
        'clean:build',
        'copy:build',

        // -- Generate the CSS files
        'less',
        'clean:less',

        // -- Minification
        'imagemin',
        'svgmin',
        'htmlmin',

        // -- Modify some files (to remove or replace some elements)
        'combine:build',
        'strip',

        // -- Minification using RequireJs
        'requirejs',

        // -- Minify frameworks JavaScript files
        'uglify',

        // -- At last, generate the HTML5 manifest
        'manifest'
    ]);
};