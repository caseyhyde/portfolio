app.controller('LiveViewController', ['$scope', '$location', function($scope, $location) {
  console.log("Live View Cotnroller running");

  const self = this;

  self.loading = true;

  $scope.$on('$viewContentLoaded', function() {
    console.log("iFrame Loaded!");
    self.loading = false;

  })

  self.back = function() {
    $location.path('/projects');
  };
}]);//End controller
