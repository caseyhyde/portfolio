app.controller('landingController', ['$location', '$scope', 'NavFactory', function($location, $scope, NavFactory) {
  console.log("Landing controller is running\n\n");

  const self = this;
  self.goods = true;
  self.arrow = false;

  self.arrowClick = function() {
    NavFactory.show = true;
    $location.path('/life');
  }

  angular.element(document).ready(function() {
    console.log("Jquery working! Document ready!");
    //Animate "Hi!"
    $('#welcomeHi').textillate({
      selector: '.hi',
      initialDelay: 0,
      autoStart: true,
      loop: false,
      minDisplayTime: 18000,
      in: {
        effect: 'flipInY',
        delayScale: 1,
        delay: 200,
        sync: false,
        shuffle: false
      },
      out: {
        effect: 'fadeOutDownBig',
        shuffle: false,
        delayScale: 1,
        delay: 50
      },
      type: 'char'
    });
    //Animate "My name is"
    $('#welcomeName').textillate({
      selector: '.name',
      initialDelay: 400,
      autoStart: true,
      loop: false,
      minDisplayTime: 11500,
      in: {
        effect: 'flipInY',
        delayScale: 1,
        delay: 50,
        sync: false,
        shuffle: false,
      },
      out: {
        effect: 'fadeOutDownBig',
        shuffle: false,
        delayScale: 1,
        delay: 50
      },
      type: 'char'
    });
    //Animate "I'm good at"
    $('#iGood').textillate({
      selector: '.message',
      initialDelay: 900,
      autoStart: true,
      loop: false,
      minDisplayTime: 13000,
      in: {
        effect: 'flipInY',
        delayScale: 1,
        delay: 35,
        sync: false,
        shuffle: false,
      },
      out: {
        effect: 'fadeOutDownBig',
        shuffle: false,
        delayScale: 1,
        delay: 20
      },
      type: 'char'
    });
    $('#goods').textillate({
      initialDelay: 1200,
      autoStart: true,
      loop: false,
      in: {
        effect: 'flipInY',
        delayScale: 1,
        delay: 20,
        sync: false,
        shuffle: false,
        callback: function() {
          console.log("callback");
          self.arrow = true;
          $scope.$apply();
        }
      }
    });
  });//End document.ready
}]);//End controller
