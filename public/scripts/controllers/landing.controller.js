app.controller('landingController', ['$location', '$scope', function($location, $scope) {
  console.log("Landing controller is running\n\n");

  const self = this;
  self.goods = true;
  self.likes = false;

  angular.element(document).ready(function() {
    console.log("Jquery working! Document ready!");



    $('#welcomeHi').textillate({
      selector: '.hi',
      initialDelay: 200,
      autoStart: true,
      loop: false,
      minDisplayTime: 18000,
      in: {
        effect: 'rotateInDownRight',
        delayScale: 1,
        delay: 250,
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

    $('#welcomeName').textillate({
      selector: '.name',
      initialDelay: 1000,
      autoStart: true,
      loop: false,
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

    $('#iGood').textillate({
      selector: '.message',
      initialDelay: 2000,
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
      // out: {
      //   effect: 'fadeOutDownBig',
      //   shuffle: false,
      //   delayScale: 1,
      //   delay: 50
      // },
      type: 'char'
    });

    // $('#iLike').textillate({
    //   selector: '.message',
    //   initialDelay: 2000,
    //   autoStart: true,
    //   loop: false,
    //   minDisplayTime: 13000,
    //   in: {
    //     effect: 'flipInY',
    //     delayScale: 1,
    //     delay: 35,
    //     sync: false,
    //     shuffle: false,
    //   },
    //   // out: {
    //   //   effect: 'fadeOutDownBig',
    //   //   shuffle: false,
    //   //   delayScale: 1,
    //   //   delay: 50
    //   // },
    //   type: 'char'
    // });

    // $('#goods').textillate({
    //   selector: '.things',
    //   initialDelay: 2500,
    //   autoStart: true,
    //   loop: false,
    //   minDisplayTime: 800,
    //   in: {
    //     effect: 'flipInY',
    //     delayScale: 1,
    //     delay: 20,
    //     sync: false,
    //     shuffle: false,
    //   },
    //   // out: {
    //   //   effect: 'fadeOutDownBig',
    //   //   shuffle: false,
    //   //   delayScale: 1,
    //   //   delay: 50
    //   // },
    //   type: 'char'
    // });

    // $('#likes').textillate({
    //   selector: '.things',
    //   initialDelay: 2500,
    //   autoStart: true,
    //   loop: false,
    //   minDisplayTime: 800,
    //   in: {
    //     effect: 'flipInY',
    //     delayScale: 1,
    //     delay: 20,
    //     sync: false,
    //     shuffle: false,
    //   },
    //   // out: {
    //   //   effect: 'fadeOutDownBig',
    //   //   shuffle: false,
    //   //   delayScale: 1,
    //   //   delay: 50
    //   // },
    //   type: 'char'
    // });


    //When "I'm good at" message finishes loading, load list of "goods":
    $('#iGood').on('inAnimationEnd.tlt', function() {
      console.log("iGood inAnimationEnd");
      $('#goods').textillate('in');
    });
    //When "goods" finishes loading, wait, then start removing goods:
    $('#goods').on('inAnimationEnd.tlt', function() {
      console.log("goods inAnimationEnd");
      $('#goods').textillate('out');
    });
    //When "goods" have been removed, remove "I'm good at message":
    $('#goods').on('outAnimationEnd.tlt', function() {
      console.log("goods outAnimationEnd");
      $('#iGood').textillate('out');
    });
    //When "I'm good at" message has been removed, load "I like these:" message:
    $('#iGood').on('outAnimationEnd.tlt', function() {
      self.goods = false;
      self.likes = true;
      $scope.$apply();
      console.log("iGood outAnimationEnd");
      $('#iLike').textillate('in');
    });
    //When "I like these" message has been loaded, load "likes":
    $('#iLike').on('inAnimationEnd.tlt', function() {
      console.log("iLike inAnimationEnd");
      $('#likes').textillate('in');
    });
    //When "likes" have been loaded, wait, then remove "likes":
    $('#likes').on('inAnimationEnd.tlt', function() {
      console.log("likes inAnimationEnd");
      $('#likes').textillate('out');
    });
    //When "likes" have been removed, wait, then remove "I like these:" message:
    $('#likes').on('outAnimationEnd.tlt', function() {
      console.log("likes outAnimationEnd");
      $('#iLike').textillate('out');
    });
    //Whem "I like these" message has been removed, load "I'm good at" message (then start from top)
    $('#iLike').on('outAnimationEnd.tlt', function() {
      self.goods = true;
      self.likes = false;
      $scope.$apply()
      console.log("iLike outAnimationEnd");
      $('#iGood').textillate('in');
    })

  });


}]);//End controller
