app.controller('landingController', ['$location', '$scope', function($location, $scope) {
  console.log("Landing controller is running\n\n");

  const self = this;

  angular.element(document).ready(function() {
    console.log("Jquery working! Document ready!");

    $('#welcomeHi').textillate({
      selector: 'hi',
      initialDelay: 200,
      autoStart: true,
      loop: true,
      minDisplayTime: 18000,
      in: {
        effect: 'rotateInDownRight',
        delayScale: 1,
        delay: 250,
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

    $('#welcomeName').textillate({
      selector: 'name',
      initialDelay: 1350,
      autoStart: true,
      loop: true,
      minDisplayTime: 11500,
      in: {
        effect: 'rollIn',
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

    $('#iLike').textillate({
      selector: 'statement',
      initialDelay: 2500,
      autoStart: true,
      loop: true,
      minDisplayTime: 13850,
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
        delay: 50
      },
      type: 'char'
    });

    $('#likes').textillate({
      selector: 'texts',
      initialDelay: 2500,
      autoStart: true,
      loop: true,
      minDisplayTime: 800,
      in: {
        effect: 'flipInY',
        delayScale: 1,
        delay: 20,
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

    $('#iLike').on('outAnimationEnd.tlt', function() {
      // $location.path('/hello');
      // $scope.$apply();
    })

  });


}]);//End controller
