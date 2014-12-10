'use strict';

// Declare app level module which depends on filters, and services
(function() {
    angular.module('myApp', [
        'myApp.controllers',
        'myApp.filters',
        'myApp.services',
        'myApp.directives'
    ]).
        config(function ($routeProvider, $locationProvider) {
            $routeProvider.
                when('/node-list', {
                    templateUrl: 'partials/partial1',
                    controller: 'RegistrationCtrl'
                }).
                when('/node-detail/:nodeId', {
                    templateUrl: 'partials/node-detail',
                    controller: 'RegistrationDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/node-list'
                })

            $locationProvider.html5Mode(true)
        })
})()
