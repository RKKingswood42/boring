(function() {
    function RoomsCtrl(Room, $cookies, Message, $scope) {
        this.heroTitle = "Choose a Chat Room:";
        this.rooms = Room.all;
        this.room = {};
        this.send = function(roomObj, newMessage){
          this.room = roomObj;
          var user = $scope.boringChatCurrentUser;    
          Message.upload(newMessage, roomObj.$id, user);
            }
        this.switchRooms = function(roomObj) {
            this.room = roomObj;
            console.log("switch:",this.room);
            $scope.roomName = roomObj.$value;
            $scope.thisRoomMessages = Message.getByUid(roomObj.$id);
            
        }
    }
    angular
        .module('boringChat')
        .controller('RoomsCtrl', ['Room', '$cookies', 'Message', '$scope', RoomsCtrl]);
})();