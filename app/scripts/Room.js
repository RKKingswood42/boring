(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
//        var rooms = [{ name: 'ohai' }, { name: 'okaybye' }];
        return {
          all: rooms
        };
  }

  angular
    .module('boringChat')
    .factory('Room', ['$firebaseArray', Room]);
})();