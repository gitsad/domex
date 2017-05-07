/**
 * Created by gitsad on 18.02.17.
 */
(function () {
    app
        .controller('OneGalleryPhotoController', OneGalleryPhotoController);
    function OneGalleryPhotoController() {
        var vm = this;
        vm.visibleGalleryPhoto = false;
        vm.switchVisible = function () {
            vm.visibleGalleryPhoto = !vm.visibleGalleryPhoto;
        }
    }
})();
