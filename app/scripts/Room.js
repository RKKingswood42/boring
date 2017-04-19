(function() {

    function Room() {
//        var ref = firebase.database().ref().child("rooms");
//        var rooms = $firebaseArray(ref);
//        return {
//          all: rooms
//        };
        return {} ;
  }

  angular
    .module('boringChat')
    .factory('Room', Room);
})();