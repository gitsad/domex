/**
 * Created by gitsad on 21.02.17.
 */
(function () {
    app
        .directive('contactDomex', contact);

    function contact() {

        var directive = {
            link: link,
            templateUrl: '/js/contact/contact.template.html',
            restrict: 'EA',
            controller: 'ContactController',
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