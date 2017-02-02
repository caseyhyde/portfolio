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
    .when('/projects', {
      templateUrl: '/views/templates/projects.html',
      controller: 'ProjectsController',
      controllerAs: 'projects'
    })
    .otherwise({
      redirectTo: '/landing'
    })
}]);//End router
