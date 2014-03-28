/*jshint expr:true, camelcase:false */
/*global define:true */

/**
 * A module to define the user read view
 *
 * @module app/view/users/read
 * @exports UserReadView
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'jquery',
        'backbone',
        'tpl!app/template/users/read',
        'i18n!app/nls/globalization',
        'marionette'
    ],
    function ($, Backbone, readTemplate, i18n) {
        'use strict';

        /**
         * View for the user read view
         * @class UserReadView
         * @type Backbone.Marionette.CompositeView
         */
        return  Backbone.Marionette.ItemView.extend({
            // --------------------------------------------------------------------------------------------------------
            // Base

            /**
             * Define the template to use
             * @method
             * @param {Object} [modelJson] Object to represent the current model
             * @returns {string} The template to inject
             */
            'template': function (modelJson) {
                return readTemplate($.extend({}, i18n, { 'model': modelJson }));
            }
        });
    }
);
