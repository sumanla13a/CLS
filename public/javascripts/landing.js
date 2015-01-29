'use strict';

var landingApp = angular.module('landingApp', ['allServices']);

landingApp.controller('landingPageController', ['$scope', 'landingPageSrvc', '$location', function(scope, landingPageSrvc, location) {
    scope.landing = {
        redirect : function(url) {
            location.path('/' + url);
        }
    }
}])