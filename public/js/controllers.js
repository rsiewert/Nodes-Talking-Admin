'use strict';

/* Controllers */

(function() {
    angular.module('myApp.controllers', []).
        controller('AppCtrl', ['$scope','$http', function ($scope, $http) {

            $http({
                method: 'GET',
                url: '/api/name'
            }).
                success(function (data, status, headers, config) {
                    $scope.name = data.name;
                }).
                error(function (data, status, headers, config) {
                    $scope.name = 'Error!';
                })

            $http({
                method: 'GET',
                url: '/api/watable_data'
            }).
                success(function (data, status, headers, config) {
                    $scope.tableData = {cols:{},rows:[]}
                    $scope.watable_data = data
                    console.log("data = " + JSON.stringify(data))
                }).
                error(function (data, status, headers, config) {
                    $scope.watable_data = 'Error!';
                })

        }]).
        controller('RegistrationListCtrl',['$scope','$http', 'userInfoSvc', function ($scope,$http, userInfoSvc) {

            $http({
                method: 'GET',
                url: 'http://localhost:3000/getAll/Registration'
            }).success(function(data){
                    $scope.nodeData = data
                    $scope.nodeDataCount = $scope.nodeData.length
                    console.log('node data ', $scope.nodeData)
                }
            )

            // this would be how we get the user info and perms. this belongs in a service.

            $scope.userInfo = userInfoSvc.getUserName()
            // userinfo.username
            // userinfo.email
            console.log('userinfo: ', $scope.userInfo)



            $scope.displayDetail = function(data) {
                //alert(JSON.stringify(data.row.NodeId))
                window.location = '/node-detail/'+data.row.NodeId
            }
        }]).
        controller('RegistrationDetailCtrl',['$scope','$http','$routeParams',function ($scope,$http,$routeParams) {
            $scope.nodeId = $routeParams.nodeId
            $http({
                method: 'GET',
                url: 'http://localhost:3000/getByNodeId/Registration/'+ $routeParams.nodeId
            }).success(function(data,status,headers,config) {
                //alert(JSON.stringify(data))
                $scope.detailData = data
            }).error(function (data, status, headers, config) {
                $scope.nodeId = 'Error!'
            })
       }]).
        controller('SensorCtrl', function ($scope) {
            // write Ctrl here
        })
})()

