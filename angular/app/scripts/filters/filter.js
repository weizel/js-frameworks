angular.module('filterModule', [])
	.filter('edit_save', function () {
		return function (editing) {
			return editing ? 'Save' : 'Edit'
		};
	})