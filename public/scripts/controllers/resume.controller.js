app.controller('ResumeController', ['$http', '$mdDialog', function($http, $mdDialog) {
  console.log("Resume Controller running");
  const self = this;

  self.showEmailModal = function() {
    console.log("test");
  };

  self.email = '';

  self.email = function(ev, index) {
    console.log("Clicked");
    $mdDialog.show({
      templateUrl: '../views/templates/dialogs/emailResume.html',
      controller: 'ResumeDialogController',
      controllerAs: 'dialog',
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
}]);//End controller
