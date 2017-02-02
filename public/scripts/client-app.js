var app = angular.module('portfolioApp', ['ngRoute', 'ngAnimate', 'angularModalService']);

app.config(['$routeProvider',
'$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/landing', {
      templateUrl: '/views/templates/landing.html',
      controller: 'landingController',
      controllerAs: 'landing'
    })
    .when('/life', {
      templateUrl: '/views/templates/life.html',
      controller: 'lifeController',
      controllerAs: 'life'
    })
    .otherwise({
      redirectTo: '/landing'
    })
}]);//End router
