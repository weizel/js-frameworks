'use strict';


/* ******************** Model ************************** */

var User = function (name, email) {
	this.name = name;
	this.email = email;
	this.editing = false;


};
/* ******************** Controller ************************** */
appModule
	.controller('appController', ['$scope' , 'FancyboxService' , function ($scope, FancyboxService) {

		$scope.title = "Angular App Title";
		$scope.currentName = 'currentName';
		$scope.currentEmail = 'currentEmail';
		$scope.users = [];
		$scope.editing = false;
		$scope.createUser = function () {
			$scope.users.push(new User($scope.currentName, $scope.currentEmail));
		};
		$scope.deleteUser = function () {
			var i = $scope.users.indexOf(this.user);
			$scope.users.splice(i, 1);
		};
		$scope.editUser = function () {
			this.user.editing = !this.user.editing;
		};
		$scope.editTitle = function (e) {
			this.editing = !this.editing;
		};
		$scope.showFancybox = function () {
			FancyboxService.open('.fancy_wrapper');
		};
	}]);
