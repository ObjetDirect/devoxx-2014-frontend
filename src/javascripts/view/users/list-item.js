/*jshint expr:true, camelcase:false */
/*global define:true */

/**
 * A module to define the user list item view
 *
 * @module app/view/users/list-item
 * @exports UserListItemView
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'jquery',
        'backbone',
        'tpl!app/template/users/list-item',
        'i18n!app/nls/globalization',
        'marionette'
    ],
    function ($, Backbone, listItemTemplate, i18n) {
        'use strict';

        /**
         * View for the user list item view
         * @class UserListItemView
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
                return listItemTemplate($.extend({}, i18n, { 'model': modelJson }));
            },

            /**
             * @property {string} HTML tag element to use
             */
            'tagName': 'tr'
        });
    }
);
