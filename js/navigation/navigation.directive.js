/**
 * Created by gitsad on 08.01.17.
 */
(function () {
    app
        .directive('navigationDomex', navigation);

    function navigation($window) {
        var directive = {
            link: link,
            templateUrl: '/js/navigation/navigation.template.html',
            restrict: 'EA',
            controller: 'NavigationController',
            scope: {
                max: '=',
                scroll: '=',
                isOpenMenu: '=?isOpenMenu'
            },
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs) {
            var windowEl = angular.element($window);
            var handler = function() {
                scope.scroll = windowEl.scrollTop();
            }
            windowEl.on('scroll', scope.$apply.bind(scope, handler));
            handler();
        }
    }
})();

