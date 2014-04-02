/*jshint expr:true, camelcase:false */

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

(function (Backbone, _, i18n, app) {
	'use strict';

	/**
	 * View for the user list item view
	 * @class UserNotFoundView
	 * @type Backbone.Marionette.CompositeView
	 */
	app.view.UserNotFoundView = Backbone.Marionette.ItemView.extend({
		// --------------------------------------------------------------------------------------------------------
		// Base

		/**
		 * Define the template to use
		 * @method
		 * @returns {string} The template to inject
		 */
		'template': function () {
			var template =  _.template(document.querySelector('#template-users-404').innerHTML);
			return template(i18n);
		}
	});
	
}(Backbone, _, window.i18n, window.app));
