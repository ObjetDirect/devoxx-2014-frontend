/*jshint expr:true, camelcase:false */

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

(function (Backbone, _, i18n, app) {
	'use strict';

	/**
	 * View for the user list item view
	 * @class UserListItemView
	 * @type Backbone.Marionette.ItemView
	 */
	app.view.UserListItemView = Backbone.Marionette.ItemView.extend({
		// --------------------------------------------------------------------------------------------------------
		// Base

		/**
		 * Define the template to use
		 * @method
		 * @param {Object} [modelJson] Object to represent the current model
		 * @returns {string} The template to inject
		 */
		'template': function (modelJson) {
			var template =  _.template(document.querySelector('#template-users-list-item').innerHTML);
			return template($.extend({}, i18n, { 'model': modelJson }));
		},

		/**
		 * @property {string} HTML tag element to use
		 */
		'tagName': 'tr'
	});
	
}(Backbone, _, window.i18n, window.app));
