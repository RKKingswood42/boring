(function() {
    function ModalCtrl($uibModal, Room) {
        this.animationsEnabled = false;
        this.openModal = function(){
            var $thisModal = $uibModal.open({
                animation: this.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/addRoom.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalInstance'
            });  
        $thisModal.result.then(function(name){
            this.room = name;
            Room.addRoom(this.room);
            });
        };
    }    
    
    angular
        .module('boringChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();