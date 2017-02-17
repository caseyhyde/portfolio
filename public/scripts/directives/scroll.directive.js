app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {

        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 65) {
                 scope.boolChangeClass = true;
             } else {
                 scope.boolChangeClass = false;
                 scope.$apply();
             }
            scope.$apply();
        });
    };
});
