/*jshint node: true, camelcase: false */
/*global module: true, process: true */

/**
 * We create a local webserver for the application, and try to manage the cross-domain problems (with proxy forwarding)
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

'use strict';

console.log('Request to start the server for live loading');
//noinspection JSPotentiallyInvalidConstructorUsage
var express = require('express'),
    app = express(),
    proxy = new require('http-proxy').createProxyServer(),
    hostServer = 'localhost',
    portServer = 9000,
    regExpServerProxy = /^\/api\//;

// ---------------------------------------------------------------------------------------------------------------------
// Add some mime-types
console.log('Define some mime types');
express.static.mime.define(
    {
        'text/cache-manifest': ['appcache'],
        'text/html': ['tmpl'],
        'text/less': ['less'],
        'image/svg+xml': ['svg'],
        'font/opentype': ['otf'],
        'application/vnd.ms-fontobject': ['eot'],
        'application/octet-stream': ['ttf'],
        'application/font-woff': ['woff']
    }
);

// ---------------------------------------------------------------------------------------------------------------------
// Redirection on the backend server (avoiding Cross-Domain origins !)

app.all(regExpServerProxy, function (req, res) {
    console.log('Call a proxified URL: ' + req.url);
    proxy.web(req, res, {
        'target': 'http://' + hostServer + ':' + portServer
    });
});

// ---------------------------------------------------------------------------------------------------------------------
// Classical configuration
console.log('Initialization of the server (with right configurations and middlewares)');
app.configure(function () {
    app.enable('trust proxy');
    app.use(express.static(__dirname)); // Our server is the local directory '.'
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

// ---------------------------------------------------------------------------------------------------------------------
// At last
console.log('Server will start now !');
app.listen(process.env.PORT || 9002);
module.exports = app; // Export the current file to the grunt-express task !