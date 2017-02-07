var app = angular.module('portfolioApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

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
    .when('/ads', {
      templateUrl: '/views/templates/ads.html',
      controller: 'LiveViewController',
      controllerAs: 'liveView'
    })
    .otherwise({
      redirectTo: '/landing'
    })
}]);//End router
