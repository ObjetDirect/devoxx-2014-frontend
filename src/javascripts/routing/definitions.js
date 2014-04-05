/*global define: true, require: true */

/**
 * A module where we define routing rules
 * We externalize the definitions to avoid cycling dependencies when views need the app.router as dependencies for the navigation
 *
 * @module app/routing/definitions
 * @exports Applicationapp.router
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

(function ($, Backbone, app) {
	'use strict';
        
	// -----------------------------------------------------------------------------------------------------------------
	// Routes definition

	// Default route
	app.router.route('*defaults', 'default', function () {
		app.router.navigate('users', { trigger: true, replace: true });
	});

	// Error
	app.router.route('error', 'error', function () {
		app.pageContent.show(new app.view.ErrorView());
	});

	// Users route
	app.router.route('users', 'users', function () {
		var usersModel = new app.model.UsersModel();
		usersModel.fetch({
			'reset': true,
			'success': function () {
				app.pageContent.show(new app.view.UsersListView({ 'collection': usersModel }));
			},
			'error': function (model, jqXHR) {
				app.service.RoutingService.errorUserRedirection(jqXHR);
			}
		});
	});

	// User display route
	app.router.route('users/:userId/read', 'users-read', function (userId) {
		var userModel = new app.model.UserModel({  '_id': userId});
		userModel.fetch({
			'success': function () {
				app.pageContent.show(new app.view.UserReadView({ 'model': userModel }));
			},
			'error': function (model, jqXHR) {
				app.service.RoutingService.errorUserRedirection(jqXHR);
			}
		});
	});

	// User edition route
	app.router.route('users/:userId', 'users-write', function (userId) {
		var userModel = new app.model.UserModel({  '_id': userId});
		userModel.fetch({
			'success': function () {
				app.pageContent.show(new app.view.UserWriteView({ 'model': userModel }));
			},
			'error': function (model, jqXHR) {
				app.service.RoutingService.errorUserRedirection(jqXHR);
			}
		});
	});

	// User creation route
	app.router.route('users/create', 'users-creation', function () {
		app.pageContent.show(new app.view.UserWriteView({ 'model': new app.model.UserModel() }));
	});

	// User not found route
	app.router.route('users/notfound', 'users-notfound', function () {
		app.pageContent.show(new app.view.UserNotFoundView());
	});

	// -----------------------------------------------------------------------------------------------------------------
	// Start the application
	$(document).ready(function () {
		console.log('We will init the navigation !');

		// Init the application
		app.addRegions({
			'pageHeader': '[data-region="page-header"]',
			'pageContent': '[data-region="page-content"]'
		});

		Backbone.history.start();

		app.pageHeader.show(new app.view.HeaderView());
		console.log('Navigation initialization done.');
	});
	
}(jQuery, Backbone, window.app));