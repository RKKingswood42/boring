(function() {
  function BoringCookies($cookies, $uibModal, $scope) {
    var currentUser = $cookies.get('boringChatCurrentUser');
    if (!currentUser || currentUser === '') {
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
      currentUser = $cookies.get('boringChatCurrentUser');    
    }
  }

  angular
    .module('boringChat')
    .run(['$cookies', '$uibModal', BoringCookies]);
})();