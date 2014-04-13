/* global define: true, describe: true, it: true, expect: true, runs: true, waitsFor: true, spyOn: true */

/**
 * A module to check users collection behaviours.
 *
 * @module test/base/usersSpec
 * @version 1.0
 * @since 1.0
 * @author FDU3285
 */
define(
    ['jquery', 'app/model/users'],
    function ($, Users) {
        'use strict';

        describe('Suite tests for users collection synchronization', function () {
            it('Should fetch with success call ajax get and fill the given collection with result', function () {
                var users = new Users();

                spyOn($, 'ajax').andCallFake(function (params) {
                    params.success([{'id': 1, 'firstName': 'John', 'lastName': 'Doe', 'age': 25}]);
                });

                users.fetch();

                expect($.ajax.mostRecentCall.args[0].url).toEqual('/api/users');
                expect($.ajax.mostRecentCall.args[0].type).toEqual('GET');

                expect(users.length).toEqual(1);
                var data = users.findWhere({id:1});
                expect(data).toBeDefined();
                expect(data.get('id')).toEqual(1);
            });
        });
    }
);