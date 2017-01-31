app.controller('landingController', function() {
  console.log("Landing controller is running\n\n");

  const SELF = this;

  $(document).ready(function() {
    console.log("Jquery working! Document ready!");
    $('.tlt').textillate();
  });



});//End controller
