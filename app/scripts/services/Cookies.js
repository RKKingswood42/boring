(function() {
  function BoringCookies($cookies, $uibModal, $scope) {
    this.currentUser = $cookies.get('boringChatCurrentUser');
    if (!this.currentUser || this.currentUser === '') {
      var modalInstance = $uibModal.open({
                animation: false,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/templates/username.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalInstance'
      })
      modalInstance.result.then(function(username){
          $cookies.put('boringChatCurrentUser', username);
        });    
    }
  }

  angular
    .module('boringChat')
    .run(['$cookies', '$uibModal', BoringCookies]);
})();