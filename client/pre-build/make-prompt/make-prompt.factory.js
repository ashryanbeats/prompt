app.factory('MakePromptFactory', function($http) {

    let submitPrompt = function(newPrompt) {
        return $http.post('/api/prompts/', newPrompt)
        .then(function(res) {
          return res.data;
        });
    };

    return {
    	submitPrompt: submitPrompt
    }
});
