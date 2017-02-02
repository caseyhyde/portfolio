app.controller('lifeController', ['$location', 'ModalService', function($location, ModalService) {
  console.log("Life controller is running");

  const self = this;

  self.backToLanding = function() {
    $location.path('/landing');
  };

  self.help = function() {
    ModalService.showModal({
      template: '<h1>Hello World</h1>',
      controller: 'lifeController'
    })
  };

}]);//End controller
