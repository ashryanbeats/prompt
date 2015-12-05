app.controller('PromptController', function($scope, $http, PromptFactory) {
  
  $scope.$on('$stateChangeSuccess', function () {
    var defaultMessage = 'If you don\'t see a list of prompts here, you need to seed your database!\nIn your terminal, go to this app\'s directory and run `gulp seedDB`.\nThen try this page again.';

    PromptFactory.getPrompts()
      .then(function(prompts) {
        
        if (!prompts.length) {
          $scope.defaultMessage = defaultMessage;
        }
        else {
          $scope.prompts = prompts;
        }
        
      });
  });
});