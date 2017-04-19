(function(){
    angular
    .module('boringChat', ['firebase'])
    .factory('Fixtures', ['$firebaseArray', function($firebaseArray){
        var rooms = new Firebase('https://boring-chat.firebaseio.com');
        function getRooms(){
            return $firebaseArray(rooms);
        }
        return {
            getRooms: getRooms
        }
    }]);
})();




