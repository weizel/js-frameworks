(function ($) {
	Backbone.sync = function(method, model, success, error){
		success();
	}

	var User = Backbone.Model.extend({
		default : {
			name : 'name',
			email : 'email'
		}
	});

	var List = Backbone.Collection.extend({
		model : User
	});

	var UserView = Backbone.View.extend({
		tagName : 'li',
		events : {
			'click button.remove' : 'remove'
		},
		initialize : function(){
			_.bindAll(this, 'render', 'unrender', 'remove');
			this.model.bind('change', this.render);
			this.model.bind('remove', this.unrender);
		},
		render : function(){
			$(this.el).append("<li>"+this.model.get('name')+" "+this.model.get('email')+"<button class='remove'>remove</button></li>");
			return this;
		},
		remove : function(){
			this.model.destroy();
		},
		unrender : function(){
			$(this.el).remove();
		}
	});

	var UsersView = Backbone.View.extend({
		el: $('body'),
		initialize: function () {
			_.bindAll(this, 'render', 'addUser', 'appendUser');
			this.collection = new List();
			this.collection.bind('add', this.appendUser);
			this.counter = 0;
			this.render();
		},
		render: function () {
			var self = this;
			$(this.el).append('<button id="add">add user</button>');
			$(this.el).append("<ul></ul>");
			_(this.collection.models).each(function(item){
				self.appendUser(item);
			}, this);
		},
		events: {
			'click button#add': 'addUser'
		},

		addUser: function () {
			this.counter++;
			var user = new User();
			user.set({
				name : 'setName' + this.counter,
				email: 'setMail'
			});
			this.collection.add(user);
		},
		appendUser : function(user){
			var userView = new UserView({
				model : user
			})
			$('ul', this.el).append(userView.render().el);
		}
	});
	var usersView = new UsersView();

})(jQuery);