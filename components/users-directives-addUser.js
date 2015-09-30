var app = angular.module('userGrid');

app.directive('addUser', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            console.log(1);

        }
    }
});