/*jshint expr:true, camelcase:false */
/*global define:true */

/**
 * A module to define the user write view
 *
 * @module app/view/users/write
 * @exports UserWriteView
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'jquery',
        'backbone',
        'tpl!app/template/users/write',
        'i18n!app/nls/globalization',
        'app/routing/router',
        'app/service/rounting',
        'marionette'
    ],
    function ($, Backbone, writeTemplate, i18n, router, RoutingService) {
        'use strict';

        /**
         * View for the user write view
         * @class UserWriteView
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
                return writeTemplate($.extend({}, i18n, { 'model': modelJson }));
            },

            /**
             * Contains a map of events of the view
             * @memberOf UserWriteView.prototype
             */
            'events': {
                'submit form': 'onSaveOrCreateUserHandler'
            },

            // --------------------------------------------------------------------------------------------------------
            // Handlers

            /**
             * Handler to create or update a user
             *
             * @method
             * @param {Event} event
             */
            'onSaveOrCreateUserHandler': function (event) {
                event.preventDefault();

                var serialize = { };

                $.each(
                    $(event.target).serializeArray(),
                    function (index, input) {
                        serialize[input.name] = input.value;
                    }
                );

                serialize.age = window.parseInt(serialize.age, 10);

                this.model.save(
                    serialize,
                    {
                        'error': function (model, jqXHR) {
                            RoutingService.errorUserRedirection(jqXHR);
                        },
                        'success': function () {
                            router.navigate('users', { 'trigger': true });
                        }
                    }
                );
            }
        });
    }
);
