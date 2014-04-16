/*jshint expr:true, camelcase:false */

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
(function ($, Backbone, _, i18n, app) {
	'use strict';

	/**
	 * View for the user list view
	 * @class UserListView
	 * @type Backbone.Marionette.CompositeView
	 */
	app.view.UserListView = Backbone.Marionette.CompositeView.extend({
		// --------------------------------------------------------------------------------------------------------
		// Base

		/**
		 * Define the template to use
		 * @method
		 * @param {Object} [modelJson] Object to represent the current model
		 * @returns {string} The template to inject
		 */
		'template': function (modelJson) {
			var template =  _.template(document.querySelector('#template-users-list').innerHTML);
			return template($.extend({}, i18n, { 'model': modelJson }));
		},

		/**
		 * @property {string} Selector to find the place where we have to inject the items
		 */
		'itemViewContainer': 'tbody',

		/**
		 * @property {Backbone.View} Specification of the type of childs
		 */
		'itemView': app.view.UserListItemView,

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
			var id = $(event.currentTarget).data('user-id');
			this.collection.get(id).destroy();
		}
	});
	
}(jQuery, Backbone, _, window.i18n, window.app));
