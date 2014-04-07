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
                }
            }
        }
    };
};