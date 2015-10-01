var app = angular.module('userGrid');

app.controller('UserCtrl', ['$scope','$location','users', function($scope, $location, users, $digest) {

    var self = this;
    $scope.users = users.getUsers();
    self.user = {};

    self.checkAdd = function(){
        users.addUser( self.user );
        //$scope.$digest();
    };

}]);