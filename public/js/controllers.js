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
                    //console.log("d = " + $scope.name)
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
        controller('RegistrationListCtrl',['$scope','$http',function ($scope,$http) {
            $scope.loadRegs = function() {
                console.log("**************INSIDE loadRegs().................")
                $http({
                    method: 'GET',
                    url: 'http://localhost:3000/getAll/Registration'
                }).success(function(data,status,headers,config) {
                        console.log(data)
                        $scope.tableData = {cols:{},rows:[]}
                        $scope.tableData.cols = {
                            NodeId:             {index:1,type:"string",unique:true},
                            Description:        {index:2,type:"string"},
                            Status:             {index:3,type:"string",tooltip:"status of the node"},
                            Latitude:           {index:4,type:"number"},
                            Longitude:          {index:5,type:"number"},
                            Altitude:           {index:6,type:"number"},
                            OriginTimestamp:    {index:7,type:"string"},
                            Updated:            {index:8,type:"string"}
                        }

                        var d = data
                        for(var i=0; i<50; i++) {
                            var row = {}
                            row['NodeId']           = d[i].data.message.node.nodeId
                            row['Description']      = d[i].data.message.node.description
                            row['Status']           = d[i].data.message.node.status
                            row['Latitude']         = d[i].data.message.node.location.latitude
                            row['Longitude']        = d[i].data.message.node.location.longitude
                            row['Altitude']         = d[i].data.message.node.location.altitude
                            row['OriginTimestamp']  = d[i].data.message.originTimestamp
                            row['Updated']          = d[i].data.message.updated
                            $scope.tableData.rows.push(row)
                        }
                        var tbl = jQuery('#thetable').html("").WATable({
                    			preFill: false,
                    			debug: true,
                    			filter: true,
                                rowClicked: function(data) {
                                    $scope.displayDetail(data)
                                }

                    		}).data('WATable')
                        tbl.setData($scope.tableData)

                        //$scope.registrations = data
                    }).error(function(data,status,headers,config) {
                        $scope.registrations = [{Error: "Error in http call"}]
                    })
            }
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

