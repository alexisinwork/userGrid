var app = angular.module('userGrid');

app.controller('UserCtrl', ['$scope','$location','users', function($scope, $location, users) {

    var self = this;
    $scope.users = users.getUsers();
    self.user = {};

    $scope.checkAdd = function(){
        users.addUser( new User($scope.firstName, $scope.secondName, $scope.phone, $scope.gender, $scope.age) );
    };

    self.delete = function(name){
        users.delete(name);
    };

    $scope.sorting = function(orderBy){
        users.sorting(orderBy);
    };

}]);