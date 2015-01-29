'use strict';

var services = angular.module('allServices', ['ngResource']);

services.factory('useQuizService', ['$resource', function(resource) {
    return resource('/quizes/english/:id', {}, {
        getQuiz: {method: 'GET', isArray: false},
        checkAnswer: {method: 'POST', isArray: false}
    });
}])

.factory('landingPageSrvc', ['$resource', function(resource) {
    return resource('/getallsubjects', {}, {
        getSubjects: {method: 'GET', isArray: true}
    });
}])

.factory('courseContentService', ['$resource', function(resource) {
    return resource('/getcoursecontent', {}, {
        getCourseContent: {method: 'GET', isArray: false}
    })
}]);

