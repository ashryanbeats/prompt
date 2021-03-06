app.factory('PromptFactory', function($http) {
    let getAllPrompts = function() {
      return $http.get('/api/prompts/')
        .then(function(res) {
          return res.data;
        });    
    };

    let getRandomPrompt = function() {
      return $http.get('/api/prompts/random/')
        .then(function(res) {
          return res.data;
        });
    };

    return {
    	getAllPrompts: getAllPrompts,
    	getRandomPrompt: getRandomPrompt
    }
});
