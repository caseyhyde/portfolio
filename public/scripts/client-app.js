var app = angular.module('portfolioApp', ['ngRoute']);

app.config(['$routeProvider',
'$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/landing', {
      templateUrl: '/views/templates/landing.html',
      controller: 'landingController',
      controllerAs: 'landing'
    })
    .when('/hello', {
      templateUrl: '/views/templates/hello.html',
      controller: 'helloController',
      controllerAs: 'hello'
    })
    .otherwise({
      redirectTo: '/landing'
    })
}]);//End router
