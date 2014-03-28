/*jshint expr:true, camelcase:false */
/*global define:true */

/**
 * A module to define the error view
 *
 * @module app/view/error
 * @exports ErrorView
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'backbone',
        'tpl!app/template/error',
        'i18n!app/nls/globalization',
        'marionette'
    ],
    function (Backbone, errorTemplate, i18n) {
        'use strict';

        /**
         * View for the error view
         * @class ErrorView
         * @type Backbone.Marionette.CompositeView
         */
        return  Backbone.Marionette.ItemView.extend({
            // --------------------------------------------------------------------------------------------------------
            // Base

            /**
             * Define the template to use
             * @method
             * @returns {string} The template to inject
             */
            'template': function () {
                return errorTemplate(i18n);
            }
        });
    }
);
