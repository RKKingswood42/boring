(function(){
    function ModalInstanceCtrl($uibModalInstance){
        this.okay = function(){
            this.room = {
                name: ''
            }
            $uibModalInstance.close(this.name);
        };
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
    }
    
angular
    .module('boringChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();