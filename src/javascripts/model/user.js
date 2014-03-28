/*global define:true */

/**
 * A module returning the User model
 *
 * @module app/model/user
 * @exports UserModel
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'backbone'
    ],
    function (Backbone) {
        'use strict';

        /**
         * Login Model
         * @class UserModel
         * @type Backbone.Model
         */
        return Backbone.Model.extend(
            {
                /**
                 * Default values
                 * @property {string} [id=null] User identity
                 * @property {string} [firstName='A default firstname'] Firstname
                 * @property {string} [lastName='A default lastname'] Lastname
                 * @property {number} [age=18] Age of the user
                 * @property {boolean} [enable=true] Is the user enable ?
                 */
                'defaults': {
                    'id': null,
                    'firstName': 'A default firstname',
                    'lastName': 'A default lastname',
                    'age': 18,
                    'enable': true
                },

                /**
                 * REST url to manipulate the list of projects
                 * @type {string}
                 */
                'urlRoot': '/api/users'
            }
        );
    }
);
