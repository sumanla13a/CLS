'use strict';

var courseApp = angular.module('courseControllers', ['allServices']);

courseApp.controller('courseController', ['$scope', '$location', 'courseContentService', function(scope, location, courseContentService) {
    scope.course = courseContentService.getCourseContent(function(){
        scope.course.contents = scope.course.content;
        scope.course.title = scope.course.title;
    });
}])