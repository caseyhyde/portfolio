app.controller('landingController', ['$location', function($location) {
  console.log("Landing controller is running\n\n");

  const SELF = this;

  // $location.path('/hello');


  angular.element(document).ready(function() {
    console.log("Jquery working! Document ready!");

    $('#welcomeHi').textillate({
      initialDelay: 400,
      autoStart: true,
      loop: true,
      in: {
        effect: 'flipIn',
        delayScale: 1,
        delay: 250,
        sync: false,
        shuffle: false
      },
      type: 'char'
    });

    $('#welcomeName').textillate({
      initialDelay: 1000,
      autoStart: true,
      loop: false,
      in: {
        effect: 'flipIn',
        delayScale: 1,
        delay: 75,
        sync: false,
        shuffle: false
      },
      type: 'char'
    });

    $('#iLike').textillate({
      selector: 'statement',
      initialDelay: 1700,
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
      loop: false,
      minDisplayTime: 800,
      in: {
        effect: 'flipInY',
        delayScale: 1,
        delay: 25,
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
      console.log("Out animation ended");
      changeRoute();
    })



  });

  function changeRoute() {
    console.log("change route ran");
    console.log("Location: ", $location);
    $location.path('/hello');
  }


}]);//End controller
