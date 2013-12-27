define([
	'backbone',
	'marionette',
	'hbs!templates/user/profile'
	], function(Backbone, Marionette, template) {
   
	    var UserProfileView = Backbone.Marionette.ItemView.extend({

	    	initialize: function () {
	    		
	    	},
	    	
			template: template
	    });
	   
	    return UserProfileView;
});