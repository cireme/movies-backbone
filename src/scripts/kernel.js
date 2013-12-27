require([
	'jquery',
	'backbone',
	'marionette',
	'bootstrap',
	'application',
	'helpers/dateHelpers'
	], function($, Backbone, Marionette, bootstrap, App){

		$(function() {
			App.start();
		});
});