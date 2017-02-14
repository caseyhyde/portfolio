app.controller('ProjectsController', ['$location', function($location) {
  console.log('ProjectsController running');

  const self = this;

  self.adsShow = false;
  self.adsHide = true;

  self.liveView = function(project) {
    console.log('liveView Clicked');
    $location.path('/' + project)
  };

}]);
