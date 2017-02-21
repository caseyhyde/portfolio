app.factory('NavFactory', ['$location', function($location) {

  var api = {
    show: false,
    highlight: "none",
    pageHighlighter: function(page) {
      api.highlight = page;
    }
  };

  if($location.path() !== '/landing') {
    api.show = true;
  };

  return api;
}]);
