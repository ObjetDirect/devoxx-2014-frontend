/*global define: true */

/**
 * A module returning the instance of the Marionette application.
 *
 * @module app/app
 * @exports Backbone.Marionette.Application
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'backbone',
        'marionette'
    ],
    function (Backbone) {
        'use strict';

        return new Backbone.Marionette.Application();
    }
);
