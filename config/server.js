/*jshint node:true */
/*global module: true */

var path = require('path');

// Server configuration
module.exports = function(grunt, options){
    'use strict';

    return {
        'tasks': {
            // grunt-express will serve the files from the folders listed in `bases`
            // on specified `port` and `hostname`
            'express': {
                'all': {
                    'options': {
                        'port': 9002,
                        'hostname': 'localhost',
                        'server': path.resolve(options.dirname, 'livereload.js'), // Prefer using this instead of 'bases': mostly faster !
                        'livereload': true
                    }
                }
            },

            // grunt-watch will monitor the projects files
            'watch': {
                'all': {
                    'files': [
                            options.srcFolderPath + '/**/*'
                    ],
                    'options': {
                        'livereload': true
                    }
                }
            },

            // grunt-open will open your browser at the project's URL
            'open': {
                'all': {
                    // Gets the port from the connect configuration
                    'path': 'http://localhost:<%= express.all.options.port%>/src/index.html'
                }
            }
        }
    };
};