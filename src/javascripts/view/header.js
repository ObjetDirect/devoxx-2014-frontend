/*jshint expr:true, camelcase:false */
/*global define:true */

/**
 * A module to define the header view
 *
 * @module app/view/header
 * @exports HeaderView
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'backbone',
        'tpl!app/template/header',
        'i18n!app/nls/globalization',
        'marionette'
    ],
    function (Backbone, headerTemplate, i18n) {
        'use strict';

        /**
         * View for the header view
         * @class HeaderView
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
                return headerTemplate(i18n);
            }
        });
    }
);
