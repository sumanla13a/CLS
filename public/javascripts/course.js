'use strict';

var courseApp = angular.module('courseControllers', ['allServices']);

courseApp.controller('courseController', ['$rootScope','$scope', '$location', 'courseContentService', '$anchorScroll', function(rootScope, scope, location, courseContentService, anchorScroll) {

    scope.subjects = ['English', 'Math', 'Science'];//todo: eventually get this from service as well

    scope.courses = {
        getContent: function(subject) {
            location.path('/subject/' + subject);
        }
    }

    scope.scrollTo = function(id, index) {
        var newHash = id + index;
      if (location.hash() !== newHash) {
        alert(newHash);
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        location.hash('content4');
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        anchorScroll();
      }
    };
}]);

courseApp.controller('subjectCourseController', ['$scope', '$location', 'courseContentService', '$anchorScroll', '$routeParams', function(scope, location, courseContentService, anchorScroll, routeParams) {
    var subject = routeParams.sub;
    scope.course = courseContentService.getCourseContent({sub: subject.toLowerCase()},function(){
        scope.course.contents = scope.course.success ? scope.course.content : ['You came early. Class Starts at 9:00 am'];
        scope.course.title = scope.course.success ? scope.course.title : 'You came early. Class Starts much later. Have a nice Break';
    });
}]);
