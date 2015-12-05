app.controller('MakePromptController', function($scope, $http, MakePromptFactory) {

  const defaultRandomMessage = 'Error: we didn\'t get a prompt back.';

  $scope.name = MakePromptFactory.name;

});