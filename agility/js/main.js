(function($, $$){
	//Helper Function for rendering dom
	var ENTER_KEY = 13;
	var drawHtml = function(selector) {
		return $(selector).remove().wrap('<div>').parent().html();
	};
	$(function() {
		// define user object
		var user = $$({
			model : {
				name : 'username',
				email : 'email',
				editing : false
			},
			view : {
				format : drawHtml('#users-list > li')
			},
			controller : {
				'click #btn_edit' : function(e){
					this.view.$('label').hide();
					this.view.$('input').show();
				},
				'keyup input[type="text"]' : function(e){
					if (e.which === ENTER_KEY){
						this.view.$('input').hide();
						this.view.$('label').show();
					}
				},
				'click #btn_delete' : function(e){
					this.destroy();
				}
			}
		}).persist($$.adapter.localStorage, {
				collection : 'users'
			});

		// define application object
		var app = $$({
			model: {
				title: 'Application Title'
			},
			view: {
				format: drawHtml('#app')
			},
			controller: {
				'click #btn_create' : function(e){
					var new_user = $$(user, {
						name : $('#name').val().trim(),
						email : $('#email').val().trim()
					});
					this.append(new_user, '#users-list');
				}
			}
		}).persist();

		$$.document.prepend(app);

	});
})(window.jQuery, window.agility);