app.config(function ($stateProvider) {
    $stateProvider.state('get-prompt', {
        url: '/get-prompt',
        templateUrl: '/pre-build/get-prompt/get-prompt.html',
        controller: 'PromptController'
    });
});