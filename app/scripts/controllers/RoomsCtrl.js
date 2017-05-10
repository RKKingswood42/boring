(function() {
    function RoomsCtrl(Room, Message, $scope) {
        this.heroTitle = "Choose a Chat Room:";
        this.rooms = Room.all;
        this.switchRooms = function(roomObj) {
            this.room = roomObj;
            $scope.roomName = roomObj.$value;
            $scope.thisRoomMessages = Message.getByUid(roomObj.$id);
        }
    }
    angular
        .module('boringChat')
        .controller('RoomsCtrl', ['Room', 'Message', '$scope', RoomsCtrl]);
})();