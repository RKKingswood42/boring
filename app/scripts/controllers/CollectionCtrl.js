(function() {
    function CollectionCtrl(Fixtures) {
        this.albums = Fixtures.getCollection(12);
    }
    angular
        .module('boringChat')
        .controller('CollectionCtrl', CollectionCtrl);
})();
