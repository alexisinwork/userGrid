var app = angular.module('userGrid');

app.controller('UserCtrl', ['$scope','$location','users', function($scope, $location, users) {

    var self = this;
    $scope.users = users.getUsers();
    self.user = {};

    self.checkAdd = function(){
        users.addUser( self.user );
        console.log($scope.users);
    };

}]);