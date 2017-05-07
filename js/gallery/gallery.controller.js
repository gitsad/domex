/**
 * Created by gitsad on 18.02.17.
 */
(function () {
    app
        .controller('GalleryController', GalleryController);
    function GalleryController() {
        var vm = this;
        sr.reveal('.one-gallery-photo-animate', { duration: 500 }, 100);
        vm.limitNumber = 8;
        vm.isExpanded = false;
        vm.expandListOfPhotos = function () {
            if(!vm.isExpanded) {
                vm.isExpanded = true;
                return vm.limitNumber = vm.photos.length;
            }
            return vm.shrinkListOfPhotos();
        };
        vm.shrinkListOfPhotos = function () {
            vm.isExpanded = false;
            vm.limitNumber = 8;
        };
        vm.photos = [
            'img/architektura/1-min.jpg',
            'img/architektura/2-min.jpg',
            'img/architektura/3-min.jpg',
            'img/architektura/4-min.jpg',
            'img/architektura/5-min.jpg',
            'img/architektura/6-min.jpg',
            'img/architektura/7-min.jpg',
            'img/architektura/8-min.jpg',
            'img/architektura/9-min.jpg',
            'img/architektura/10-min.jpg',
            'img/architektura/11-min.jpg',
            'img/architektura/12-min.jpg',
            'img/architektura/13-min.jpg',
            'img/architektura/14-min.jpg',
            'img/architektura/15-min.jpg',
            'img/architektura/16-min.jpg',
            'img/architektura/17-min.jpg',
            'img/architektura/18-min.jpg',
            'img/architektura/19-min.jpg',
            'img/architektura/20-min.jpg',
            'img/architektura/21-min.jpg',
            'img/wykonczenia/1.jpg',
            'img/wykonczenia/2.jpg',
            'img/wykonczenia/3.jpg',
            'img/wykonczenia/4.jpg',
            'img/wykonczenia/5.jpg',
            'img/wykonczenia/6.jpg',
            'img/wykonczenia/7.jpg',
            'img/wykonczenia/8.jpg',
            'img/wykonczenia/9.jpg',
        ]
    }
})();
