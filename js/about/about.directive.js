(function () {
    app
        .directive('aboutDomex', about);

    function about() {

        var directive = {
            link: link,
            templateUrl: '/js/about/about.template.html',
            restrict: 'EA',
            controller: 'AboutController',
            scope: {
                max: '='
            },
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
})();

