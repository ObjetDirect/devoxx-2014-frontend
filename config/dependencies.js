/*jshint node:true */
/*global module: true */

var path = require('path');

// Dependencies configuration
module.exports = function(grunt, options){
    return {
        'tasks': {
            // Bower part
            'bower': {
                'install': {
                    'options': {
                        // See https://github.com/yatskevich/grunt-bower-task#options
                        'targetDir': options.srcFolderPath + '/frameworks',
                        'verbose': true,
                        'install': true,
                        'cleanBowerDir': false,
                        'cleanTargetDir': true,
                        'bowerOptions': {
                            'forceLatest': false,
                            'production': true
                        },
                        'layout': function (type, component) {
                            if (type === '__untyped__') {
                                return component;
                            }

                            return type === 'js' ? component : path.join(component, type); // Avoid the copy of the JavaScript files into a sub folder "js"
                        }
                    }
                }
            }
        }
    };
};