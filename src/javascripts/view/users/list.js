/*jshint expr:true, camelcase:false */
/*global define:true */

/**
 * A module to define the user list view
 *
 * @module app/view/users/list
 * @exports UserListView
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'jquery',
        'backbone',
        'tpl!app/template/users/list',
        'i18n!app/nls/globalization',
        'app/view/users/list-item',
        'marionette'
    ],
    function ($, Backbone, listTemplate, i18n, UserListItemView) {
        'use strict';

        /**
         * View for the user list view
         * @class UserListView
         * @type Backbone.Marionette.CompositeView
         */
        return  Backbone.Marionette.CompositeView.extend({
            // --------------------------------------------------------------------------------------------------------
            // Base

            /**
             * Define the template to use
             * @method
             * @param {Object} [modelJson] Object to represent the current model
             * @returns {string} The template to inject
             */
            'template': function (modelJson) {
                return listTemplate($.extend({}, i18n, { 'model': modelJson }));
            },

            /**
             * @property {string} Selector to find the place where we have to inject the items
             */
            'itemViewContainer': 'tbody',

            /**
             * @property {Backbone.View} Specification of the type of childs
             */
            'itemView': UserListItemView,

            /**
             * Contains a map of events of the view
             * @memberOf UserListView.prototype
             */
            'events': {
                'click tbody a[data-user-id]': 'onDeleteUserHandler'
            },

            /**
             * Contains a map of events of the collection
             * @memberOf UserListView.prototype
             */
            'collectionEvents': {
                'sync': 'render'
            },

            // --------------------------------------------------------------------------------------------------------
            // Handlers

            /**
             * Handler to remove a user
             *
             * @method
             * @param {MouseEvent} event
             */
            'onDeleteUserHandler': function (event) {
                var id = window.parseInt($(event.currentTarget).data('user-id'), 10);
                this.collection.get(id).destroy();
            }
        });
    }
);
