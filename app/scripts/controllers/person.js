'use strict';

/**
* @ngdoc function
* @name tp7App.controller:PersonCtrl
* @description
* # PersonCtrl
* Controller of the tp7App
*/
angular.module('tp7App')
.controller('PersonCtrl', ["$scope", function ($scope) {
	$scope.testvar = "test variable home controller";
}]);
