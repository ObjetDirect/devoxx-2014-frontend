/*jshint node:true */
/*global module: true */

// Reports configuration
module.exports = function(grunt, options){
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-lesslint');

    return {
        'tasks': {
            // JsDoc
            'jsdoc': {
                'build': {
                    'src': [options.srcFolderPath + '/javascripts/**/*.js'],
                    'options': {
                        'destination': options.targetFolderPath + '/jsdoc3'
                    }
                }
            },

            // JsHint part
            'jshint': {
                'options': {
                    'force': true,
                    'reporter': 'checkstyle',
                    'reporterOutput': options.targetFolderPath + '/report-jshint-checkstyle.xml'
                },
                'strict': {
                    'src': [options.srcFolderPath + '/javascripts/**/*.js'],
                    // See https://github.com/jshint/jshint/blob/master/examples/.jshintrc
                    'jshintrc': '.jshintrc'
                }
            },

            // LessLint part
            'lesslint': {
                'options': {
                    'formatters': [
                        // See https://github.com/gruntjs/grunt-contrib-csslint#formatters
                        {
                            'id': 'checkstyle-xml',
                            'dest': options.targetFolderPath + '/report-lesslint-checkstyle.xml'
                        }
                    ]
                },
                'strict': {
                    'force': true,
                    'src': [options.srcFolderPath + '/stylesheets/**/*.less'],
                    'csslint': {
                        // See https://github.com/stubbornella/csslint/wiki/Rules
                        // See too https://github.com/gruntjs/grunt-contrib-csslint#options
                        'overqualified-elements': false,
                        'fallback-colors': true,
                        'empty-rules': true,
                        'duplicate-properties': true,
                        'known-properties': true,
                        'non-link-hover': true,
                        'adjoining-classes': false,
                        'import': true,
                        'font-faces': 2,
                        'universal-selector': true,
                        'zero-units': false,
                        'floats': true,
                        'font-sizes': true,
                        'important': false
                    }
                }
            },

            // Other parts
            'clean': {
                'reports': {
                    'src': [options.targetFolderPath + '/jsdoc3', options.targetFolderPath + '/report-jshint-checkstyle.xml', options.targetFolderPath + '/report-lesslint-checkstyle.xml']
                }
            }
        }
    };
};