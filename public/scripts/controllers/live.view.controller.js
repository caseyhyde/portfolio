app.controller('LiveViewController', ['$scope', '$location', function($scope, $location) {
  console.log("Live View Cotnroller running");

  const self = this;

  self.loading = true;

  self.loadingFn = function() {
    console.log("loaded");
    self.loading = false;
    $scope.$apply();
  };

  self.back = function() {
    $location.path('/projects');
  };
}]);//End controller
