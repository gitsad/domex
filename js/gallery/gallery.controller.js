/**
 * Created by gitsad on 18.02.17.
 */
(function () {
    app
        .controller('GalleryController', GalleryController);
    function GalleryController() {
        var vm = this;
        sr.reveal('.one-gallery-photo-animate', { duration: 500 }, 100);
    }
})();
