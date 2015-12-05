app.controller('PromptController', function($scope, $http, PromptFactory) {
  
  $scope.$on('$stateChangeSuccess', function () {
    const defaultAllMessage = 'If you don\'t see a list of prompts here, you need to seed your database!\nIn your terminal, go to this app\'s directory and run `gulp seedDB`.\nThen try this page again.';
    const defaultRandomMessage = 'Seed your database to get a random prompt!';

    PromptFactory.getAllPrompts()
      .then(function(prompts) {
        
        if (!prompts.length) {
          $scope.defaultAllMessage = defaultMessage;
        }
        else {
          $scope.prompts = prompts;
        }
        
      });

    PromptFactory.getRandomPrompt()
      .then(function(prompt) {
        console.log(prompt.length);

        if (!prompt) {
          $scope.defaultRandomMessage = defaultRandomMessage;
        }
        else {
          $scope.randomPrompt = prompt.text;

        }

      });
  });
});