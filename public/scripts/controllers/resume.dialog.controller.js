app.controller('ResumeDialogController', ['$http', function($http) {
  console.log("Resume Dialog Controller running");

  var self = this;
  self.sent = false;

  self.toEmail = '';
  self.message = '';

  self.send = function() {
    console.log("clicked");
    $http({
      method: 'POST',
      url: '/email/resume',
      data: {
        email: self.toEmail,
        message: self.message
      }
    })
    .then(function(response) {
      console.log("Resonse: ", response);
      self.sent = true;
    })
  }
}]);//End controller
