/*global define: true */
/*jshint expr:true */

/**
 * A module where we initialize the base router
 *
 * @module app/routing/router
 * @exports ApplicationRouter
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'jquery',
        'backbone',
        'app/app'
    ],
    function ($, Backbone, app) {
        'use strict';

        var
            /**
             * Router for our application
             * @class ApplicationRouter
             * @type Backbone.Router
             */
            Router = Backbone.Router.extend({
                // Nothing here, to avoid circle dependencies

                // We extend the route method to add a precondition before routing
                'route': function (route, name, callback) {
                    Backbone.Router.prototype.route.apply(
                        this,
                        [
                            route,
                            name,
                            function () {
                                if ($.isFunction(this.resolve)) {
                                    var arg = arguments,
                                        self = this;

                                    this.resolve.call(this, name, function () {
                                        $.isFunction(self.before) && self.before.call(self, name);
                                        callback.apply(self, arg);
                                        $.isFunction(self.after) && self.after.call(self, name);
                                    });

                                } else {
                                    $.isFunction(this.before) && this.before.call(this, name);
                                    callback.apply(this, arguments);
                                    $.isFunction(this.after) && this.after.call(this, name);
                                }
                            }
                        ]
                    );
                }
            });

        // Export the instance
        app.router = new Router();
        return app.router;
    }
);