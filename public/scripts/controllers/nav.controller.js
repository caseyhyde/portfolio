app.controller('navController', ['NavFactory', '$rootScope', '$location', function(NavFactory, $rootScope, $location) {
  console.log("Nav controller is running");

  const self = this;

  self.show = false;
  self.highlighted = "";

  // $rootScope.$on('$routeChangeSuccess', function(next, last) {
  //   self.show = NavFactory.show;
  //   self.highlighted = NavFactory.highlight;
  //   console.log("route change detected", self.highlighted);
  // });

  self.toggleHamburger = function() {
    self.hamburgerOpen = !self.hamburgerOpen;
  };

  self.backToLanding = function() {
    $location.path('/landing');
  }

  self.redirect = function(page) {
    $location.path('/' + page);
  }

  self.scroll = function() {
    console.log("scrolling");
    console.log(this.pageYOffest);
  }





}]);//End controller
