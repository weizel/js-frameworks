'use strict';

/* ******************** Controller ************************** */
var MainCtrl = function($scope) {
	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];
};

var appController = function($scope){
	$scope.title = "Angular App Title";
	$scope.currentName = 'currentName';
	$scope.currentEmail = 'currentEmail';
	$scope.users = [];
	$scope.editing = false;
	$scope.createUser = function(){
		$scope.users.push(new User($scope.currentName, $scope.currentEmail));
	};
	$scope.deleteUser = function(){
		var i = $scope.users.indexOf(this.user);
		$scope.users.splice(i, 1);
	};
	$scope.editUser = function(){
		this.user.editing = !this.user.editing;
	};
	$scope.editTitle = function(e){
		this.editing = !this.editing;
	};
};





/* ******************** Model ************************** */

var User = function(name, email){
	this.name = name;
	this.email = email;
	this.editing = false;
};

angular.module('testApp').controller('MainCtrl', MainCtrl);
angular.module('testApp').controller('appController', appController);