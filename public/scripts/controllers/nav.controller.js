app.controller('navController', ['NavFactory', '$rootScope', function(NavFactory, $rootScope) {
  console.log("Nav controller is running");

  const self = this;

  self.show = false;
  self.highlighted = "";

  $rootScope.$on('$routeChangeSuccess', function(next, last) {
    self.show = NavFactory.show;
    self.highlighted = NavFactory.highlight;
    console.log("route change detected", self.highlighted);
  });

  self.toggleHamburger = function() {
    self.hamburgerOpen = !self.hamburgerOpen;
  };






}]);//End controller
