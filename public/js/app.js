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
                when('/nodes-list', {
                    templateUrl: 'partials/nodes-list',
                    controller: 'RegistrationListCtrl'
                }).
                when('/node-detail/:nodeId', {
                    templateUrl: 'partials/node-detail',
                    controller: 'RegistrationDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/nodes-list'
                })

            $locationProvider.html5Mode(true)
        })
})()
