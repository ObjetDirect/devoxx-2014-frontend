/*global define: true */
/*jshint expr:true */

/**
 * A module to define utilities function for the routing
 *
 * @module app/service/rounting
 * @exports RountingService
 *
 * @author Julien Roche
 * @version 1.0
 * @since 1.0
 */
define(
    [
        'app/routing/router'
    ],
    function (router) {
        'use strict';

        /**
         * @alias module:RountingService
         */
       return {
           /**
            * Redirect to the right page in error case
            *
            * @method
            * @static
            * @param {jqXHR} jqXHR
            * @param {string} [urlFor404]
            */
           'errorRedirection': function (jqXHR, urlFor404) {
               if (urlFor404 && jqXHR.status === 404) {
                   router.navigate(urlFor404, { 'trigger': true, 'replace': true });

               } else {
                   router.navigate('error', { 'trigger': true, 'replace': true });
               }
           },

           /**
            * Redirect to the right page in user error case
            *
            * @method
            * @static
            * @param {jqXHR} jqXHR
            */
           'errorUserRedirection': function (jqXHR) {
               this.errorRedirection(jqXHR, 'users/notfound');
           }
       };
    }
);