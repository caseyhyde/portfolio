app.controller('landingController', function() {
  console.log("Landing controller is running\n\n");

  const SELF = this;

  $(document).ready(function() {
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
      initialDelay: 2000,
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

    $('#likes').textillate({
      selector: 'texts',
      initialDelay: 2500,
      autoStart: true,
      loop: true,
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



  });



});//End controller
