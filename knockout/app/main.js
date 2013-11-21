// to depend on a bower installed component:
// define(['component/componentName/file'])

require(['jquery', 'ko'], function($, ko) {
	$(function() {
		//knockout application

		/* ************ ViewModel ************** */
		var AppModel = function(users) {
			var self = this;
			self.title = ko.observable('Initial Title');
			self.currentUserName = ko.observable();
			self.currentUserEmail = ko.observable();
			self.users = ko.observableArray(ko.utils.arrayMap(users, function(user) {
				return new User(user.title, user.completed);
			}));
			self.createUser = function() {
				self.users.push(new User(self.currentUserName(), self.currentUserEmail()));
			};
			self.deleteUser = function() {
				self.users.remove(this)
			};
		};

		var User = function(name, email, editing) {
			var self = this;
			self.name = ko.observable(name);
			self.email = ko.observable(email);
			self.editing = ko.observable(false);
			self.edit = function(){
				self.editing(!self.editing());
				console.log(this);
			};
		};

		/* *********** run App ************* */
		var users = [];
		ko.applyBindings(new AppModel(users));
	});
})