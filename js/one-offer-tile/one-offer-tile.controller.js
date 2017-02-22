/**
 * Created by gitsad on 21.02.17.
 */
(function () {
    app
        .controller('OneOfferTileController', OneOfferTileController);
    function OneOfferTileController() {
        var vm = this;
        vm.visible = false;
        vm.switchVisible = function () {
            vm.visible = !vm.visible;
        }
    }
})();
