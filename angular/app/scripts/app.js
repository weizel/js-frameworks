'use strict';
var appModule = angular.module('appModule', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ui.bootstrap',
	'filterModule'
]);


appModule
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'appController'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'appController'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
