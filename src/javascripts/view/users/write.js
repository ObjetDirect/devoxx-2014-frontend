/*jshint expr:true, camelcase:false */

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

(function (Backbone, _, i18n, app) {
	'use strict';

	/**
	 * View for the user write view
	 * @class UserWriteView
	 * @type Backbone.Marionette.CompositeView
	 */
	app.view.UserWriteView = Backbone.Marionette.ItemView.extend({
		// --------------------------------------------------------------------------------------------------------
		// Base

		/**
		 * Define the template to use
		 * @method
		 * @param {Object} [modelJson] Object to represent the current model
		 * @returns {string} The template to inject
		 */
		'template': function (modelJson) {
			var template =  _.template(document.querySelector('#template-users-write').innerHTML);
			return template($.extend({}, i18n, { 'model': modelJson }));
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

			if (serialize.id) {
				serialize.id = window.parseInt(serialize.id, 10);
			}

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
	
}(Backbone, _, window.i18n, window.app));
