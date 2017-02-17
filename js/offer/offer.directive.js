/**
 * Created by gitsad on 17.02.17.
 */
(function () {
    app
        .directive('offerDomex', offer);

    function offer() {

        var directive = {
            link: link,
            templateUrl: '/js/offer/offer.template.html',
            restrict: 'EA',
            controller: 'OfferController',
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