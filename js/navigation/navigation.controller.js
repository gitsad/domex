/**
 * Created by gitsad on 08.01.17.
 */

(function () {
    app
        .controller('NavigationController', NavigationController);
    function NavigationController($location, $anchorScroll) {
        var vm = this;
        vm.goToPlace = function (hash) {
            $location.hash(hash);
            $anchorScroll();
        }
    }
})();
