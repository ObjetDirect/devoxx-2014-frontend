/*jshint node:true */
/*global module: true */

// Distribution configuration
module.exports = function(grunt, options){
    'use strict';

    return {
        'tasks': {
            // RequireJS part
            'requirejs': {
                'build': {
                    /**
                     * Configuration for the RequireJs compilation
                     * @see https://github.com/jrburke/r.js/blob/master/build/example.build.js
                     */
                    'options': {
                        'appDir': options.srcFolderPath + '/javascripts',
                        'baseUrl': '.',
                        'mainConfigFile': options.srcFolderPath + '/javascripts/main.js',
                        'name': 'main',
                        'findNestedDependencies': true, // Detect require call into require / define modules and include these into the build.
                        'keepBuildDir': true,
                        'dir': options.tempWebAppBuildPath + '/javascripts',
                        'optimize': 'uglify2',
                        'skipDirOptimize': false,
                        'preserveLicenseComments': false,
                        'logLevel': 0,
                        'useSourceUrl': false,
                        'uglify': {
                            'toplevel': true,
                            'ascii_only': true,
                            'beautify': false,
                            'max_line_length': 10000,
                            'defines': {
                                'DEBUG': ['name', 'false']
                            },
                            'no_mangle': false // If you set to 'false', you will have some problems with angular, if you don't specify the injection. Like: function ($scope) ... insteadof ['$scope', function ($scope) ...]
                        },
                        'uglify2': {
                            'output': {
                                'beautify': false
                            },
                            'compress': {
                                'sequences': false,
                                'global_defs': {
                                    'DEBUG': false
                                }
                            },
                            'warnings': true,
                            'mangle': false // If you set to 'false', you will have some problems with angular, if you don't specify the injection. Like: function ($scope) ... insteadof ['$scope', function ($scope) ...]
                        },
                        'optimizeCss': 'standard.keepLines',
                        'paths': {
                            'app/template': '../templates' // Base on the 'dir' option path. We override this path in the case we have done modifications and compression on these
                        }
                    }
                }
            },

            // Less part
            // See https://github.com/less/less.js
            // See https://github.com/gruntjs/grunt-contrib-less
            'less': {
                'build': {
                    'options': {
                        'compress': true,
                        'cleancss': true
                    },
                    'files': [
                        {
                            expand: true,     // Enable dynamic expansion.
                            cwd: options.srcFolderPath + '/stylesheets',      // Src matches are relative to this path.
                            src: ['style.less'], // Actual pattern(s) to match.
                            dest: options.tempWebAppBuildPath + '/stylesheets',   // Destination path prefix.
                            ext: '.css'   // Dest filepaths will have this extension.
                        }
                    ]
                }
            },

            // Other parts
            'copy': {
                'build': {
                    'files': [
                        {
                            'expand': true,
                            'cwd': options.srcFolderPath + '/',
                            'dest': options.tempWebAppBuildPath + '/',
                            'flatten': false,
                            'src': '**/*'
                        }
                    ]
                }
            },

            'htmlmin': {
                'build': {
                    'options': {
                        'removeComments': true,
                        'collapseWhitespace': true,
                        'removeAttributeQuotes': true,
                        'removeCDATASectionsFromCDATA': true,
                        'removeCommentsFromCDATA': true
                    },
                    'files': [
                        {
                            'expand': true,
                            'cwd': options.srcFolderPath + '/',
                            'flatten': false,
                            'src': ['index.html', '**/*.tmpl'],
                            'dest': options.tempWebAppBuildPath + '/'
                        }
                    ]
                }
            },

            'imagemin': {
                'build': {
                    'files': [{
                        'expand': true,
                        'cwd': options.srcFolderPath + '/',
                        'flatten': false,
                        'src': ['**/*.{gif,jpeg,jpg,png}'],
                        'dest': options.tempWebAppBuildPath + '/'
                    }]
                }
            },

            'svgmin': {
                'build': {
                    'files': [
                        {
                            'expand': true,
                            'cwd': options.srcFolderPath + '/',
                            'flatten': false,
                            'src': ['**/*.svg'],
                            'dest': options.tempWebAppBuildPath + '/'
                        }
                    ]
                }
            },

            'manifest': {
                'build': {
                    'options': {
                        'basePath': options.tempWebAppBuildPath,
                        'network': ['*'],
                        'preferOnline': true,
                        'timestamp': true
                    },
                    'src': [ '**/*.{txt,html,htm,tmpl,svg,png,jpg,jpeg,gif,tiff,swf,js,json,css,otf,eot,ttf,woff}' ],
                    'dest': options.tempWebAppBuildPath + '/manifest.appcache'
                }
            },

            'combine': {
                'build': {
                    'input': options.tempWebAppBuildPath + '/index.html',
                    'output': options.tempWebAppBuildPath + '/index.html',
                    'tokens': [
                        {
                            'token': '<html',
                            'string': '<html manifest=manifest.appcache'
                        },
                        {
                            'token': '<script type=text/javascript charset=UTF-8 defer=defer src=./frameworks/less/less-1.6.3.js></script>',
                            'string': ' ' // Cannot set an empty character ...
                        },
                        {
                            'token': 'type=text/less',
                            'string': 'type=text/css' // Cannot set an empty character ...
                        },
                        {
                            'token': '.less',
                            'string': '.css'
                        }
                    ]
                }
            },

            'uglify': {
                'build': {
                    'files': [
                        {
                            'expand': true,
                            'cwd': options.tempWebAppBuildPath + '/',
                            'flatten': false,
                            'src': ['frameworks/**/*.js', 'nls/**/*.js'],
                            'dest': options.tempWebAppBuildPath
                        }
                    ]
                }
            },

            'strip': {
                'build': {
                    'src': options.tempWebAppBuildPath + '/**/*.js',
                    'options': {
                        'inline': true,
                        'nodes': ['console.log', 'console.warn', 'console.error', 'console.time', 'console.timeEnd']
                    }
                }
            }
        }
    };
};