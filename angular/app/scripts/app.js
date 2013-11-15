'use strict';

var routes = function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/about', {
			templateUrl : 'views/about.html',
			controller : 'appController'
		})
		.otherwise({
			redirectTo: '/'
		});
};

var filterEditSave = function(){
	return function(editing){
		return editing ? 'Save' : 'Edit'
	};
};

angular.module('testApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ui.bootstrap',
	'testAppFilters'
]).config(routes);
angular.module('testAppFilters', []).filter('edit_save', filterEditSave);
