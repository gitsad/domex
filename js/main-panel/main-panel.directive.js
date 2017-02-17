/**
 * Created by gitsad on 17.02.17.
 */
/**
 * Created by gitsad on 08.01.17.
 */
(function () {
    app
        .directive('mainPanelDomex', mainPanel);

    function mainPanel() {

        var directive = {
            link: link,
            templateUrl: '/js/main-panel/main-panel.template.html',
            restrict: 'EA',
            controller: 'MainPanelController',
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

