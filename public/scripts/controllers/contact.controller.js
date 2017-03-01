app.controller('ContactController', ['$http', function($http) {
  console.log("Contact Controller Running");
  var self = this;

  self.currentNavItem = 'Email';
  self.email = "";
  self.phone = "";
  self.emailBody = "";
  self.textBody = "";

  self.sendEmail = function() {
    console.log("Send email clicked");
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
    })
    .catch(function(err) {
      console.log("Send email error: ", err);
    })
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
    })
    .catch(function(err) {
      console.log("Send email error: ", err);
    })
  }

}])//end controller
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});//end controller config
