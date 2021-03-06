define([
	'backbone',
	'marionette',
	'hbs!templates/user/navigation'
	], function(Backbone, Marionette, template) {
   
	    var UserNavbarInfosView = Backbone.Marionette.ItemView.extend({

	    	initialize: function () {
	    		this.listenTo(this.model, 'change', this.render);
	    	},
	    	tagName: 'ul',
	    	className: 'nav navbar-nav navbar-right',
			template: template
	    });
	   
	    return UserNavbarInfosView;
});