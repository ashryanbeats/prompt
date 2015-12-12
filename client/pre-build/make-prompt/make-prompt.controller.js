app.controller('MakePromptController', function($scope, $http, MakePromptFactory) {

  $scope.maxlength = 100;

  $scope.submitPrompt = function() {
    if ($scope.newPrompt && $scope.newPrompt.length <= $scope.maxlength) {
      MakePromptFactory.submitPrompt({text: $scope.newPrompt})
        .then(function(res) {
          $scope.newPrompt = "";
        })
        .catch(function(err) {
          console.log("Error submitting the prompt: ", err);
        });
    }
    else {
      console.log("Prompt is too long.");
    }
  }

});