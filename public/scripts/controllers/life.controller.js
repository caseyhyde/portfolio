app.controller('lifeController', ['$location', function($location) {
  console.log("Hello controller is running");

  const self = this;

  self.backToLanding = function() {
    $location.path('/landing');
  };

  // self.help = function(ev, index) {
  //   $mdDialog.show({
  //     template:
  //       '<div>' +
  //         '<h1>Hello World</h1>' +
  //       '</div>',
  //     targetEvent: ev,
  //     clickOutsideToClose: true
  //   })
  // };

}]);//End controller
