/*jshint expr:true, camelcase:false */
/*global define:true */

/**
 * A module to define the user not found view
 *
 * @module app/view/users/not found
 * @exports UserNotFoundView
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'backbone',
        'tpl!app/template/users/404',
        'i18n!app/nls/globalization',
        'marionette'
    ],
    function (Backbone, notFoundTemplate, i18n) {
        'use strict';

        /**
         * View for the user list item view
         * @class UserNotFoundView
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
                return notFoundTemplate(i18n);
            }
        });
    }
);
