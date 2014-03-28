/*global define: true, require: true */

/**
 * A module where we define routing rules
 * We externalize the definitions to avoid cycling dependencies when views need the router as dependencies for the navigation
 *
 * @module app/routing/definitions
 * @exports ApplicationRouter
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'jquery',
        'backbone',
        'app/app',
        'app/routing/router',
        'app/view/header',
        'app/service/rounting'
    ],
    function ($, Backbone, app, router, HeaderView, RoutingService) {
        'use strict';
        
        // -----------------------------------------------------------------------------------------------------------------
        // Routes definition

        // Default route
        router.route('*defaults', 'default', function () {
            router.navigate('users', { trigger: true, replace: true });
        });

        // Error
        router.route('error', 'error', function () {
            // Lazy-loading !
            require(
                [
                    'app/view/error'
                ],
                function (ErrorView) {
                    app.pageContent.show(new ErrorView());
                }
            );
        });

        // Users route
        router.route('users', 'users', function () {
            // Lazy-loading !
            require(
                [
                    'app/model/users',
                    'app/view/users/list'
                ],
                function (UsersModel, UsersListView) {
                    var usersModel = new UsersModel();
                    usersModel.fetch({
                        'reset': true,
                        'success': function () {
                            app.pageContent.show(new UsersListView({ 'collection': usersModel }));
                        },
                        'error': function (model, jqXHR) {
                            RoutingService.errorUserRedirection(jqXHR);
                        }
                    });
                }
            );
        });

        // User display route
        router.route('users/:userId/read', 'users-read', function (userId) {
            // Lazy-loading !
            require(
                [
                    'app/model/user',
                    'app/view/users/read'
                ],
                function (UserModel, UserReadView) {
                    var userModel = new UserModel({  'id': userId});
                    userModel.fetch({
                        'success': function () {
                            app.pageContent.show(new UserReadView({ 'model': userModel }));
                        },
                        'error': function (model, jqXHR) {
                            RoutingService.errorUserRedirection(jqXHR);
                        }
                    });
                }
            );
        });

        // User edition route
        router.route('users/:userId', 'users-write', function (userId) {
            // Lazy-loading !
            require(
                [
                    'app/model/user',
                    'app/view/users/write'
                ],
                function (UserModel, UserWriteView) {
                    var userModel = new UserModel({  'id': userId});
                    userModel.fetch({
                        'success': function () {
                            app.pageContent.show(new UserWriteView({ 'model': userModel }));
                        },
                        'error': function (model, jqXHR) {
                            RoutingService.errorUserRedirection(jqXHR);
                        }
                    });
                }
            );
        });

        // User creation route
        router.route('users/create', 'users-creation', function () {
            // Lazy-loading !
            require(
                [
                    'app/model/user',
                    'app/view/users/write'
                ],
                function (UserModel, UserWriteView) {
                    app.pageContent.show(new UserWriteView({ 'model': new UserModel() }));
                }
            );
        });

        // User not found route
        router.route('users/notfound', 'users-notfound', function () {
            // Lazy-loading !
            require(
                [
                    'app/view/users/not-found'
                ],
                function (UserNotFoundView) {
                    app.pageContent.show(new UserNotFoundView());
                }
            );
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

            app.pageHeader.show(new HeaderView());
            console.log('Navigation initialization done.');
        });

        return router;
    }
);