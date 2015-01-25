var mainApp = angular.module('mainApp', ['ngRoute', 'allServices', 'quizApp', "ngResource"/*, 'ui.router'*/ ]);


mainApp.config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider) {
        // locationProvider.html5Mode(true);
        routeProvider
        .when('/', {
            templateUrl: 'partials/landing'
          //  controller: 'quizController'
        })
        .when('/quiz', {
            templateUrl: 'partials/quiz',
            controller: 'quizController'
        }).
        otherwise({redirectTo: '/'});
}]);