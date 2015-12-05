app.controller('MakePromptController', function($scope, $http, MakePromptFactory) {

  $scope.newPrompt = "";

  $scope.submitPrompt = function() {
    console.log("clicked");
    if ($scope.newPrompt) {
      console.log("will submit", $scope.newPrompt);
      MakePromptFactory.submitPrompt({text: $scope.newPrompt});
    }
  }

});