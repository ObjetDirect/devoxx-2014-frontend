/*jshint expr:true, camelcase:false */

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

(function (Backbone, _, i18n, app) {
	'use strict';

	/**
	 * View for the header view
	 * @class HeaderView
	 * @type Backbone.Marionette.CompositeView
	 */
	 app.view.HeaderView = Backbone.Marionette.ItemView.extend({
		// --------------------------------------------------------------------------------------------------------
		// Base

		/**
		 * Define the template to use
		 * @method
		 * @returns {string} The template to inject
		 */
		'template': function () {
			var template =  _.template(document.querySelector('#template-header').innerHTML);
			return template(i18n);
		}
	});
		
}(Backbone, _, window.i18n, window.app));
