app.factory('PromptFactory', function($http) {
  return {
    getPrompts: function() {
      return $http.get('/api/prompts/')
        .then(function(res) {
          return res.data;
        });    
    }
  };
});