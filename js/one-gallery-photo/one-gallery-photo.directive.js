/**
 * Created by gitsad on 18.02.17.
 */
(function () {
    app
        .directive('oneGalleryPhotoDomex', oneGalleryPhoto);

    function oneGalleryPhoto() {

        var directive = {
            link: link,
            templateUrl: '/js/one-gallery-photo/one-gallery-photo.template.html',
            restrict: 'EA',
            controller: 'OneGalleryPhotoController',
            scope: {
                max: '=',
                path: '@'
            },
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs) {
            scope.path = attrs.path;
        }
    }
})();