app.controller('ContactController', ['$http', '$mdDialog', function($http, $mdDialog) {
  console.log("Contact Controller Running");
  var self = this;

  self.currentNavItem = 'Email';
  self.email = "";
  self.phone = "";
  self.emailBody = "";
  self.textBody = "";
  self.sent = false;

  self.sendEmail = function() {
    console.log("Send email clicked");
    if(self.email !== "" && self. emailBody !== "") {
      $http({
        method: 'POST',
        url: '/email',
        data: {
          email: self.email,
          body: self.emailBody
        }
      })
      .then(function(response) {
        console.log("Send email response: ", response);
        self.sent = true;
        clearInputs();
      })
      .catch(function(err) {
        console.log("Send email error: ", err);
      })
    }
    else {
      console.log("Nothing in input fields");
    //     self.status = '  ';
    //     self.customFullscreen = false;
    //
    //     self.showAlert = function(ev) {
    //       $mdDialog.show(
    //         $mdDialog.alert()
    //         .parent(angular.element(document.querySelector('#popupContainer')))
    //         .clickOutsideToClose(true)
    //         .title('This is an alert title')
    //         .textContent('You can specify some description text in here.')
    //         .ariaLabel('Alert Dialog Demo')
    //         .ok('Got it!')
    //         .targetEvent(ev)
    //     );
    //   };
    }
  }

  self.sendText = function() {
    console.log("Send text clicked");
    $http({
      method: 'POST',
      url: '/text',
      data: {
        phone: self.phone,
        body: self.textBody,
        from: self.name
      }
    })
    .then(function(response) {
      console.log("Send email response: ", response);
      self.sent = true;
      clearInputs();
    })
    .catch(function(err) {
      console.log("Send email error: ", err);
    })
  }
  function clearInputs() {
    self.email = "";
    self.phone = "";
    self.emailBody = "";
    self.textBody = "";
  }
}]);//end controller
// .config(function($mdThemingProvider) {
//   $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
//   $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
//   $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
//   $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
// });//end controller config
