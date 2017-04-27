(function() {
    function RoomsCtrl(Room) {
        this.heroTitle = "Choose a Chat Room:";
        this.rooms = Room.all;
    }
    angular
        .module('boringChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl]);
})();