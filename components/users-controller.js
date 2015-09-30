var app = angular.module('userGrid');

app.controller('UserCtrl', ['$scope','$location','users', function($scope, $location, users) {

    var self = this;
    $scope.users = users.getUsers();

    self.checkAdd = function(){
        console.log('Ahahahahhaha');
    };

}]);