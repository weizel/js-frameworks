'use strict';
var appModule = angular.module('appModule', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ui.bootstrap',
	'filterModule'
]);
var filterModule = angular.module('filterModule', []);

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
	})

filterModule
	.filter('edit_save', function () {
		return function (editing) {
			return editing ? 'Save' : 'Edit'
		};
	})


/* ******************** Services ************************** */
