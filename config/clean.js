/*jshint node:true */
/*global module: true */


// Clean configuration
module.exports = function(grunt, options){
    return {
        'tasks': {
            // Other parts
            'clean': {
                'options': {
                    'force': true // We can clean external folders / files !!!
                },
                'all': {
                    'src': [options.targetFolderPath]
                },
                'tests': {
                    'src': [options.targetFolderPath + '/coverage-reports', options.targetFolderPath + '/report-test-junit.xml']
                },
                'reports': {
                    'src': [options.targetFolderPath + '/jsdoc3', options.targetFolderPath + '/report-jshint-checkstyle.xml', options.targetFolderPath + '/report-lesslint-checkstyle.xml']
                },
                'build': {
                    'src': [options.tempWebAppBuildPath]
                },
                'requirejs': {
                    'src': [options.tempWebAppBuildPath + '/javascripts-build']
                },
                'less': {
                    'src': [options.tempWebAppBuildPath + '/**/*.less']
                }
            }
        }
    };
};