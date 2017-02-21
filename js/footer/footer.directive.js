/**
 * Created by gitsad on 21.02.17.
 */
(function () {
    app
        .directive('footerDomex', footer);

    function footer() {

        var directive = {
            link: link,
            templateUrl: '/js/footer/footer.template.html',
            restrict: 'EA',
            controller: 'FooterController',
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