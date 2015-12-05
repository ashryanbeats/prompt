app.controller('MakePromptController', function($scope, $http, MakePromptFactory) {

  $scope.newPrompt = "";

  $scope.submit = function() {
    if ($scope.newPrompt) {
      MakePromptFactory.submitPrompt($scope.newPrompt);
    }
  }

});