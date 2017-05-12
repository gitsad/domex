/**
 * Created by gitsad on 21.02.17.
 */
(function () {
    app
        .directive('oneOfferTileDomex', oneOfferTile);

    function oneOfferTile() {

        var directive = {
            link: link,
            templateUrl: '/js/one-offer-tile/one-offer-tile.template.html',
            restrict: 'EA',
            controller: 'OneOfferTileController',
            scope: {
                title: '@',
                text: '@',
                photos: '@',
                tilephoto: '@'
            },
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs) {
            scope.title = attrs.title;
            scope.text = attrs.text;
            scope.tilephoto = attrs.tilephoto;
            scope.photos = attrs.photos.split(",")
        }
    }
})();