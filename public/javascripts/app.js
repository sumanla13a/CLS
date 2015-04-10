var mainApp = angular.module('mainApp', ['ngRoute', 'allServices', 'quizApp', 'landingApp', 'courseControllers',
                             "ngResource"/*, 'ui.router'*/ ]);


mainApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function(routeProvider, locationProvider, httpProvider) {

        httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        // locationProvider.html5Mode(true);
        routeProvider
        .when('/', {
            templateUrl: 'partials/landing',
            controller: 'landingPageController'
        })
        .when('/quiz', {
            templateUrl: 'partials/quiz',
            controller: 'quizController'
        }).
        when('/course', {
            templateUrl: 'partials/subjects',
            controller: 'courseController'
        }).
        when('/subject/:sub', {
            templateUrl: 'partials/course',
            controller: 'subjectCourseController'
        }).
        otherwise({redirectTo: '/'});
}]);

mainApp.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}]);
