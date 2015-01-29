var mainApp = angular.module('mainApp', ['ngRoute', 'allServices', 'quizApp', 'landingApp', 'courseControllers',
                             "ngResource"/*, 'ui.router'*/ ]);


mainApp.config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider) {
        // locationProvider.html5Mode(true);
        routeProvider
        .when('/', {
            templateUrl: 'partials/landing',
            // controller: 'landingPageController'
        })
        .when('/quiz', {
            templateUrl: 'partials/quiz',
            controller: 'quizController'
        }).
        when('/course', {
            templateUrl: 'partials/course',
            controller: 'courseController'
        }).
        otherwise({redirectTo: '/'});
}]);