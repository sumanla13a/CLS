'use strict';

var services = angular.module('allServices', ['ngResource']);

services.factory('useQuizService', ['$resource', function(resource) {
    return resource('/quizes/english/:id', {}, {
        getQuiz: {method: 'GET', isArray: false},
        checkAnswer: {method: 'POST', isArray: false}
    });
}]);