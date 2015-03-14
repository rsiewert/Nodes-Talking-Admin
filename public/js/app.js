'use strict';

// Declare app level module which depends on filters, and services
(function() {
    angular.module('myApp', [
        'myApp.controllers',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'angularUtils.directives.dirPagination'
    ]).
        config(function ($routeProvider, $locationProvider) {
            $routeProvider.
                when('/nodes-list', {
                    templateUrl: 'views/nodes-list',
                    controller: 'RegistrationListCtrl'
                }).
                when('/node-detail', {
                    templateUrl: 'views/node-detail',
                    controller: 'RegistrationDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/'
                })

            $locationProvider.html5Mode(true)
        }).
        config(function(paginationTemplateProvider){
            paginationTemplateProvider.setPath('/js/lib/dir-paginate/dirPagination.tpl.html')
        })
})()
