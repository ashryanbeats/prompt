app.config(function ($stateProvider) {
    $stateProvider.state('make-prompt', {
        url: '/make-prompt',
        templateUrl: '/pre-build/make-prompt/make-prompt.html',
        controller: 'MakePromptController'
    });
});