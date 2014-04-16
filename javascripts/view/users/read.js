/*jshint expr:true, camelcase:false */
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

(function ($, Backbone, _, i18n, app) {
	'use strict';

	/**
	 * View for the user read view
	 * @class UserReadView
	 * @type Backbone.Marionette.CompositeView
	 */
	app.view.UserReadView = Backbone.Marionette.ItemView.extend({
		// --------------------------------------------------------------------------------------------------------
		// Base

		/**
		 * Define the template to use
		 * @method
		 * @param {Object} [modelJson] Object to represent the current model
		 * @returns {string} The template to inject
		 */
		'template': function (modelJson) {
			var template =  _.template(document.querySelector('#template-users-read').innerHTML);
			return template($.extend({}, i18n, { 'model': modelJson }));
		}
	});
	
}(jQuery, Backbone, _, window.i18n, window.app));
