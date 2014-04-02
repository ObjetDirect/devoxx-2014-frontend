/**
 * A module returning a collection of User
 *
 * @module app/model/users
 * @exports UsersModel
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

(function (Backbone, app) {
	'use strict';
	
	/**
	 * Users Model
	 * @class UsersModel
	 * @type Backbone.Collection
	 */
	app.model.UsersModel = Backbone.Collection.extend(
		{
			/**
			 * Model of the items into the collection
			 * @type {Backbone.Model}
			 */
			'model': app.model.UserModel,

			/**
			 * REST url to manipulate the list of projects
			 * @type {string}
			 */
			'url': '/api/users'
		}
	);
		
}(Backbone, window.app));
