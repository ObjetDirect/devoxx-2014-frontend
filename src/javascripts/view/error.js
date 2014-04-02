/*jshint expr:true, camelcase:false */

/**
 * A module to define the error view
 *
 * @module app/view/error
 * @exports ErrorView
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

(function (Backbone, _, i18n, app) {
	'use strict';

	/**
	 * View for the error view
	 * @class ErrorView
	 * @type Backbone.Marionette.CompositeView
	 */
	 app.view.ErrorView = Backbone.Marionette.ItemView.extend({
		// --------------------------------------------------------------------------------------------------------
		// Base

		/**
		 * Define the template to use
		 * @method
		 * @returns {string} The template to inject
		 */
		'template': function () {
			var template =  _.template(document.querySelector('#template-error').innerHTML);
			return template(i18n);
		}
	});
		
}(Backbone, _, window.i18n, window.app));
