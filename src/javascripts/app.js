/**
 * A module returning the instance of the Marionette application.
 *
 * @module app/app
 * @exports Backbone.Marionette.Application
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */

(function (Backbone) {
	'use strict';
    window.app = new Backbone.Marionette.Application();
	 
	window.app.model = { };
	window.app.view = { };
	window.app.service = { };
	window.app.routing = { };
	
	window.i18n = {
        'globalization': {
            'title': 'Devoxx 2014 application',

            'error': 'An error occured',

            'users': {
                'notfound': 'The specified user wasn\'t found',

                'list': {
                    'title': 'List of users',
                    'columns': {
                        'firstname': 'FirstName',
                        'lastname': 'LastName'
                    },
                    'buttons': {
                        'create': 'Create a user',
                        'look': 'Look',
                        'delete': 'Delete'
                    }
                },

                'read': {
                    'title': 'Details of the user',
                    'labels': {
                        'age': 'Age'
                    },
                    'buttons': {
                        'back': 'Back',
                        'edit': 'Edit'
                    }
                },

                'edit': {
                    'title': 'Edit the user',
                    'title2': 'Create a user',
                    'labels': {
                        'age': 'Age',
                        'firstname': 'FirstName',
                        'lastname': 'LastName'
                    },
                    'buttons': {
                        'cancel': 'Cancel',
                        'save': 'Save'
                    }
                }
            }
        }
    };
		
}(Backbone));
