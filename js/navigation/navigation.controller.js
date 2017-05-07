/**
 * Created by gitsad on 08.01.17.
 */

(function () {
    app
        .controller('NavigationController', NavigationController);
    function NavigationController(navigationService) {
        var vm = this;
        vm.isOpenMenu = false;
        vm.scroll = 0;
        vm.goToPlace = function (hash) {
            navigationService.scrollTo(hash);
        };
        vm.openMenu = function () {
            vm.isOpenMenu = !vm.isOpenMenu;
        };
    }
})();
