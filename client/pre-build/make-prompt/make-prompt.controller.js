app.controller('MakePromptController', function($scope, $http, MakePromptFactory) {

  const defaultRandomMessage = 'Error: we didn\'t get a prompt back.';

  // $scope.getRandomPrompt = function() {
    
  //   PromptFactory.getRandomPrompt()
  //     .then(function(prompt) {

  //       if (!prompt) {
  //         $scope.defaultRandomMessage = defaultRandomMessage;
  //       }
  //       else {
  //         $scope.randomPrompt = prompt.text;
  //       }

  //     });
  // }

});