app.controller('ProjectsController', function() {
  console.log('ProjectsController running');

  const self = this;

  self.openProjects = function(projectToOpen) {
    self[projectToOpen] = true;
  };


});
