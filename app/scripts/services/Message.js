(function() {
  function Message($firebaseArray) {
    var Message = {};  
    var ref = firebase.database().ref().child("messages");
      Message.messages = $firebaseArray(ref); 
      Message.getByUid = function(roomUid){
                return $firebaseArray(ref.orderByChild("room").equalTo(roomUid));
            } 
        return Message;            
        }    
angular
    .module('boringChat')
    .factory('Message', ['$firebaseArray', Message]);
})();