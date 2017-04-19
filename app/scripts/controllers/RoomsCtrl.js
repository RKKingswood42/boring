(function() {
    function RoomsCtrl() {
        this.heroTitle = "Choose a Chat Room:";
        console.log(this.heroTitle);
    }
    
    angular
        .module('boringChat')
        .controller('RoomsCtrl', RoomsCtrl);
})();