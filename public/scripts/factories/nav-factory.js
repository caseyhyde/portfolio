app.factory('NavFactory', function() {
  const self = this;
  var api = {
    show: false,
    highlight: "none",
    pageHighlighter: function(page) {
      api.highlight = page;
    }
  }
  return api;
});
