/**
 * Created by gitsad on 17.02.17.
 */
(function () {
    app
        .controller('AboutController', AboutController);
    function AboutController() {
        var vm = this;
        sr.reveal('.about-animate', { duration: 500 });
    }
})();
