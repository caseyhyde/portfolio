app.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 20) {
        scope.boolChangeClass = true;
        if (this.pageYOffset >= 65) {
          scope.stick = true;
        } else {
          scope.stick = false;
        }
      } else {
      scope.boolChangeClass = false;
        scope.$apply();
      }
      scope.$apply();
    });
  };
});
