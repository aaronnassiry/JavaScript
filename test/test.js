var assert = require('assert');
var authController = require('../auth.controller.js');

describe('AuthController', function () {
    beforeEach(function settingUpRoles() {
        console.log('running before each');
        authController.setRoles(['user']);
    });

    describe('isAuthorized', function () {

        it('Should return false if not authorized', function () {
            assert.equal(false, authController.isAuthorized('admin'));
        })
        it('Should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        })
    })
});