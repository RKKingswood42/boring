(function() {
    function LandingCtrl() {
        this.heroTitle = "Choose a Chat Room:";
    }
    
    angular
        .module('boringChat')
        .controller('LandingCtrl', LandingCtrl);
})();