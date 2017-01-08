/**
 * Created by gitsad on 08.01.17.
 */
(function () {
    app
        .directive('navigationDomex', navigation);

    function navigation() {

        var directive = {
            link: link,
            templateUrl: '/js/navigation/navigation.template.html',
            restrict: 'EA',
            controller: 'NavigationController',
            scope: {
                max: '='
            },
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs) {
            console.log("hello")
        }
    }
})();

