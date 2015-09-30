angular.module('userGrid', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider.when('/',
            {
                templateUrl: 'components/users.html'
            })
            .when('/index.html',
            {
                redirectTo: '/'
            })
            .when('/templates/404',
            {
                templateUrl: '404.html'
            })
            .otherwise({redirectTo:'templates/404'});
    });