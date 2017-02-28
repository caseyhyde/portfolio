app.controller('lifeController', ['$location', '$http', '$timeout', '$scope', '$rootScope', function($location, $http, $timeout, $scope, $rootScope) {
  console.log("Life controller is running");

  const self = this;

  self.location = $location.path();

  $rootScope.$on('$routeChangeSuccess', function() {
    self.location = $location.path();
  });

  self.continue = function () {
    $location.path('/projects');
  }

  self.seconds = secondsArray();

  function secondsArray() {
    let arr = []
    for(let i = 100; i <= 5000; i += 100) {
      arr.push(i);
    }
    return arr;
  }

  self.currentGrid = drawGrid();
  var nextGrid = drawGrid();

  function drawGrid() {
    var tempGrid = [];
    for(let i = 0; i < 30; i++) {
      let tempRow = [];
      for(let j = 0; j < 30; j ++) {
        tempRow.push(0);
      }
      tempGrid.push(tempRow);
    }
    return tempGrid;
  }

  var temp = [];
  self.rate = 750;
  self.rain = false;
  var generation = 0;
  var dropNumber = 0;
  var gridWidth = self.currentGrid[0].length;
  var gridHeight = self.currentGrid.length;
  var randomNumbersArray = [];
  var randomCooridinatesArray = [];
  var randomCalled = false;
  var dropCounter = 0;
  var currentDrop = 0;

  function getRandoms() {
    $http({
      method: 'GET',
      url: '/random',
      headers: {
        test: "test"
      }
    }).then(function(res) {
      randomArray = res.data.data;
      randomCoordinateBuilder(randomArray);
    }).catch(function(err) {
      console.log("err: ", err);
    })
  }

  function randomCoordinateBuilder(array) {
    for(var i = 0; i < array.length; i ++) {
      let coordinateObject = {
        y: Math.floor(array[i] / gridWidth),
        x: array[i] % gridWidth
      }
      randomCooridinatesArray.push(coordinateObject);
      console.log(randomCooridinatesArray);
    }
  }

  self.start = function() {
    self.run = true;
    let next = false;
    cycle(next);
  };

  self.next = function() {
    self.run = true;
    let next = true;
    cycle(next);
  };

  self.pause = function() {
    self.run = false;
  };

  self.reset = function() {
    self.run = false;
    for(let i = 0; i < self.currentGrid.length; i ++) {
      for(let j = 0; j < self.currentGrid[i].length; j++) {
        self.currentGrid[i][j] = 0;
      }
    }
  };

  self.toggleCell = function(row, cell) {
    console.log("Cell clicked: " + row + ", " + cell);
    console.log(self.currentGrid[row][cell]);
    if(self.currentGrid[row][cell] == 1) {
      self.currentGrid[row][cell] = 0;
    } else self.currentGrid[row][cell] = 1;
  }

  self.addThing = function() {
    console.log("Clicked");
    rain("acorn", {x: 49, y: 35});
  }

  self.methuselahRain = function() {
    if(!randomCalled) {
      getRandoms();
      randomCalled = true;
    }
    self.rain = !self.rain;
    console.log(self.rain);
  }

  self.wiggle = false;

  self.iDontGetIt = function() {
    self.wiggle = !self.wiggle;
  }

  //drops a given shape with it's center at location
  function rain(shape, location) {
    switch(shape) {
      //if shape is an acorn:
      case "acorn":
        //loop through 5x5 grid
        for(var i = location.y - 2; i < location.y + 2; i ++) {
          for(var j = location.x -2; j < location.x + 2; j ++) {
            switch(i) {
              //if top row:
              case (location.y - 2):
                //check if out of bounds:
                if(i < 0 || i >= nextGrid.length || j < 0 || j >= nextGrid[0].length) {
                  break;
                }
                else {
                  nextGrid[i][j] = 0;
                  break;
                }
              //if second row:
              case (location.y - 1):
                //check if out of bounds:
                if(i < 0 || i >= nextGrid.length || j < 0 || j >= nextGrid[0].length) {
                  break;
                }
                else if(j <= location.x -1 || j == location.x + 2) {
                  nextGrid[i][j] = 0;
                  break;
                }
                else {
                  nextGrid[i][j] = 1;
                  break;
                }
              //if third row:
              case (location.y):
                //check if out of bounds:
                if(i < 0 || i >= nextGrid.length || j < 0 || j >= nextGrid[0].length) {
                  break;
                }
                else if(j == location.x - 2 || j > location.x) {
                  nextGrid[i][j] = 0;
                  break;
                }
                else {
                  nextGrid[i][j] = 1;
                  break;
                }
              //if fourth row:
              case (location.y + 1):
                //check if out of bounds:
                if(i < 0 || i >= nextGrid.length || j < 0 || j >= nextGrid[0].length) {
                  break;
                }
                else if(j < location.x || j > location.x) {
                  nextGrid[i][j] = 0;
                  break;
                }
                else {
                  nextGrid[i][j] = 1;
                  break;
                }
              //if fifth row:
              case (location.y + 2):
                //check if out of bounds:
                if(i < 0 || i >= nextGrid.length || j < 0 || j >= nextGrid[0].length) {
                  break;
                }
                else {
                  nextGrid[i][j] = 0;
                }
            }//end row switch
          }//end j for loop
        }//end i for loop
      break;
    }//end shape switch
  }//end dropBuilder()

  function cycle(next) {
    generation ++;
    console.time('cycle');
    if(self.run) {
      for (var i = 0; i < self.currentGrid.length; i++) {
        for (var j = 0; j < self.currentGrid[i].length; j++) {
          //if top row:
          if (i == 0) {
            //if leftmost column:
            if (j == 0) {
              let liveCount = self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j + 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if rightmost column:
            else if (j == self.currentGrid[i].length - 1) {
              let liveCount = self.currentGrid[i][j - 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j - 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if any other column:
            else {
              let liveCount = self.currentGrid[i][j -1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j + 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
          }
          //if bottom row:
          else if (i == self.currentGrid.length - 1) {
            //if leftmost column:
            if (j == 0) {
              let liveCount = self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j +1] + self.currentGrid[i][j +1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if rightmost column:
            else if (j == self.currentGrid[i].length - 1) {
              let liveCount = self.currentGrid[i -1][j] + self.currentGrid[i - 1][j -1] + self.currentGrid[i][j - 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if any other column:
            else {
              let liveCount = self.currentGrid[i][j - 1] + self.currentGrid[i - 1][j - 1] + self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
          }
          //if any other row:
          else {
            //if leftmost column:
            if (j == 0) {
              let liveCount = self.currentGrid[i  - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j + 1] + self.currentGrid[i + 1][j];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if rightmost column:
            else if (j == self.currentGrid[i].length - 1) {
              let liveCount = self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j - 1] + self.currentGrid[i][j - 1] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i + 1][j];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if any other column:
            else {
              let liveCount = self.currentGrid[i - 1][j -1] + self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j + 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i][j - 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
          }
        }
      }
      if(self.rain) {
        if(generation % 30 == 0) {
          if(dropCounter < 10) {
            currentDrop = dropCounter;
            console.log("CurrentDrop: ", currentDrop);
            rain("acorn", randomCooridinatesArray[currentDrop]);
            dropCounter ++;
          }
          else {
            currentDrop = dropCounter % randomCooridinatesArray.length;
            console.log("CurrentDrop: ", currentDrop);
            rain("acorn", randomCooridinatesArray[currentDrop]);
            dropCounter ++;
          }
        }
      }
      temp = self.currentGrid;
      self.currentGrid = nextGrid;
      nextGrid = temp;
      if(!next) {
        console.timeEnd('cycle');
        $timeout(cycle, self.rate);
      }
    }
  }//End cycle fxn




}]);//End controller
