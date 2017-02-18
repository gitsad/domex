
(function () {
    app
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../main.html'
            })
            .when('/offer', {
                templateUrl: '../offer.html'
            })
    }
})();
