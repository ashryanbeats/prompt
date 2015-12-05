app.controller('MakePromptController', function($scope, $http, MakePromptFactory) {

  $scope.newPrompt = "";

  $scope.submitPrompt = function() {
    if ($scope.newPrompt) {
      MakePromptFactory.submitPrompt({text: $scope.newPrompt});
    }
  }

});