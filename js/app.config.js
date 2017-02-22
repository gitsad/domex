
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
        window.sr = ScrollReveal({
            duration: 2000,
            reset: true
        });
    }
})();
