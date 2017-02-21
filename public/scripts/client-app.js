var app = angular.module('portfolioApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngOnload']);

app.config(['$routeProvider',
'$locationProvider', '$animateProvider', function($routeProvider, $locationProvider, $animateProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/landing', {
      templateUrl: '/views/templates/landing.html',
      controller: 'landingController',
      controllerAs: 'landing',
      animation: 'none'
    })
    .when('/life', {
      templateUrl: '/views/templates/life.html'
    })
    .when('/projects', {
      templateUrl: '/views/templates/projects.html',
      controller: 'ProjectsController',
      controllerAs: 'projects'
    })
    .when('/resume', {
      templateUrl: '/views/templates/resume.html',
      controller: 'ResumeController',
      controllerAs: 'resume'
    })
    .when('/ads', {
      templateUrl: '/views/templates/ads.html',
      controller: 'LiveViewController',
      controllerAs: 'liveView'
    })
    .when('/spotCheck', {
      templateUrl: '/views/templates/spotCheck.html',
      controller: 'LiveViewController',
      controllerAs: 'liveView'
    })
    .when('/gameOfLife', {
      templateUrl: '/views/templates/gameOfLife.html',
      controller: 'LiveViewController',
      controllerAs: 'liveView'
    })
    .otherwise({
      redirectTo: '/landing'
    });
  // $animateProvider.classNameFilter(/ng-animate-enabled/);

}]);//End router
