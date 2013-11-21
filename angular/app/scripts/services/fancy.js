appModule.factory('FancyboxService', function () {
	return {
		open: function (selector) {
			$.fancybox.open($(selector));
		},
		close: function () {
			$.fancybox.close();
		}
	};
});