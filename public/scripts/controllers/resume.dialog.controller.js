app.controller('ResumeDialogController', ['$http', function($http) {
  console.log("Resume Dialog Controller running");

  var self = this;

  self.email = '';

  self.send = function() {
    console.log("clicked");
    // $http({
    //   method: 'POST',
    //   url: '/email/resume',
    //   data: {
    //     email: self.email
    //   }
    // })
  }
}]);//End controller
