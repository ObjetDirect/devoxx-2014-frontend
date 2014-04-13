/*global define: true, describe: true, it: true, expect: true */

/**
 * A module to check if karma can run tests
 *
 * @module test/base/karmaSpec
 * @version 1.0
 * @since 1.0
 * @author Julien Roche
 */
define(
    [],
    function () {
        'use strict';

        describe('Suite tests for Karma - ', function () {
            // Check if Karma can run this test
            it('Checking the assert works', function () {
                expect(true).toBe(true);
            });
        });
    }
);