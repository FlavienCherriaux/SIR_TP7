'use strict';

/**
* @ngdoc function
* @name tp7App.controller:HomeCtrl
* @description
* # HomeCtrl
* Controller of the tp7App
*/
app = angular.module('tp7App');

app.factory("api", ["$resource", function($resource) {
	return $resource("http://localhost:9000/opower/api/:controller/:id", {}, {
		"getmultiple" : { method : "GET", isArray : true }
	});
}]);

app.controller('HomeCtrl', ["$scope", "api", function($scope, api) {
	$scope.home;
	$scope.homes;

	// Initialisation de la liste des maisons
	var homes = api.getmultiple({
		controller : "home"
	}, function() {
		$scope.homes = homes;
	});

	$scope.displayDetails = function(id) {
		var home = api.get({
			controller : "home",
			id : id
		}, function() {
			$scope.home = home;
		});
	}
}]);

app.controller("HomeAdd", ["$scope", "api", function($scope, api) {
	$scope.taille;
	$scope.nbChambres;
	$scope.idPerson;
	$scope.persons;

	var persons = api.getmultiple({
		controller : "person"
	}, function() {
		$scope.persons = persons;
	});
}]);
