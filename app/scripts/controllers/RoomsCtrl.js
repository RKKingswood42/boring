(function() {
    function RoomsCtrl(Room) {
        this.heroTitle = "Choose a Chat Room:";
        this.rooms = Room.all;
        console.log(this.heroTitle);
        console.log(this.rooms);
    }
    
    angular
        .module('boringChat')
        .controller('RoomsCtrl', ['Room', RoomsCtrl]);
})();