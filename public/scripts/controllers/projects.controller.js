app.controller('ProjectsController', ['$location', function($location) {
  console.log('ProjectsController running');

  const self = this;

  self.liveView = function(project) {
    console.log('liveView Clicked');
    $location.path('/' + project)
  }

}]);
