/*global define:true */

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
define(
    [
        'backbone',
        'app/model/user'
    ],
    function (Backbone, UserModel) {
        'use strict';

        /**
         * Users Model
         * @class UsersModel
         * @type Backbone.Collection
         */
        return Backbone.Collection.extend(
            {
                /**
                 * Model of the items into the collection
                 * @type {Backbone.Model}
                 */
                'model': UserModel,

                /**
                 * REST url to manipulate the list of projects
                 * @type {string}
                 */
                'url': '/api/users'
            }
        );
    }
);
