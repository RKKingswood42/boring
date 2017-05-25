(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};  
    var ref = firebase.database().ref().child("messages");
      
    Message.messages = $firebaseArray(ref); 
    Message.getByUid = function(roomUid){
        return $firebaseArray(ref.orderByChild("room").equalTo(roomUid));
        }
    Message.upload= function(newMessage, roomUid, username){
        console.log({message: newMessage,
                        room: roomUid,
                      sentAt: new Date(),
                    username: $cookies.get('boringChatCurrentUser') });
        return Message.messages.$add({message: newMessage,
                                         room: roomUid,
                                       sentAt: new Date(),
                                     username: $cookies.get('boringChatCurrentUser') });
    }
    return Message;            
  }    
angular
    .module('boringChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();