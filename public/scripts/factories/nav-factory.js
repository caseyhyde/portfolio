app.factory('NavFactory', ['$location', function($location) {

  var api = {
    show: false,
    highlight: "none",
    pageHighlighter: function(page) {
      api.highlight = page;
    }
  };

  return api;
}]);
