'use strict';

var landingApp = angular.module('landingApp', ['allServices']);

landingApp.controller('landingPageController', ['$scope', 'landingPageSrvc', '$location', 'loginSrvc', '$rootScope', function(scope, landingPageSrvc, location, loginSrvc, rootScope) {
    scope.landing = {
        redirect : function(url) {
            location.path('/' + url);
        }
    };
    rootScope.loggedin = rootScope.loggedin || false;
    scope.loginMethod = {
        submit : function () {
            var promise = new Promise(function(resolve, reject) {
                loginSrvc.login(scope.login, function(res) {
                    if(res.status) {
                        resolve(res);
                    } else {
                        rootScope.loggedin = false;
                        reject(Error(res.message));
                    }
                })
            });
            promise.then(loggedIn, failedLoggingIn);
        }
    }

    function loggedIn(res) {
        scope.user = res;
        rootScope.loggedin = true;
    }
    function failedLoggingIn(message) {
        alert(message);
    }
}])