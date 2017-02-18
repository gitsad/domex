/**
 * Created by gitsad on 18.02.17.
 */
(function () {
    app
        .directive('galleryDomex', gallery);

    function gallery() {

        var directive = {
            link: link,
            templateUrl: '/js/gallery/gallery.template.html',
            restrict: 'EA',
            controller: 'GalleryController',
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