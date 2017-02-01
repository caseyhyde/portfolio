var app = angular.module('portfolioApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/landing', {
      templateUrl: '/views/templates/landing.html',
      controller: 'landingController',
      controllerAs: 'landing'
    })
    .otherwise({
      redirectTo: '/landing'
    })
}]);//End router
