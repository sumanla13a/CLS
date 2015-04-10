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

.factory('loginSrvc', ['$resource', function(resource) {
    return resource('/student/login', {}, {
        login: {method: 'POST', isArray: false}
    });
}])

.factory('courseContentService', ['$resource', function(resource) {
    return resource('/getcoursecontent/:sub', {}, {
        getCourseContent: {method: 'GET', isArray: false}
    })
}]);

