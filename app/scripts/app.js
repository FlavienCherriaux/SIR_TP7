'use strict';

/**
* @ngdoc overview
* @name tp7App
* @description
* # tp7App
*
* Main module of the application.
*/
angular
.module('tp7App', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch'
])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	})
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'homee'
	})
	.when('/person', {
		templateUrl: 'views/person.html',
		controller: 'PersonCtrl',
		controllerAs: 'about'
	})
	.when('/device', {
		templateUrl: 'views/device.html',
		controller: 'DeviceCtrl',
		controllerAs: 'about'
	})
	.otherwise({
		redirectTo: '/'
	});
});
