/**
 * Created by gitsad on 08.01.17.
 */

(function () {
    app
        .controller('NavigationController', NavigationController);
    function NavigationController(navigationService) {
        var vm = this;
        vm.goToPlace = function (hash) {
            navigationService.scrollTo(hash);
            /*
            $location.hash(hash);
            $anchorScroll();
            */
        }
    }
})();
