 define([
	'backbone',
	'underscore',
	'marionette',
	'collections/comments',
	'views/comment/commentView',
	'hbs!templates/user/profile'
	], function(Backbone, _, Marionette, CommentCollection, CommentView, template) {
   
	    var UserProfileView = Backbone.Marionette.ItemView.extend({

	    	initialize: function () {
	    		var self = this;
	    		this.comments = new CommentCollection(this.model.toJSON().comments.items);
	    		this.commentView = new CommentView({ 
	    			collection: this.comments,
	    			target: { libelle: 'userId', value: self.model.get("id") }
	    		});
	    	},

	    	ui:{
	    		commentArea: '.comment-area'
	    	},

	    	template: template,

	    	onRender: function () {
	    		this.ui.commentArea.html(this.commentView.render().el);
	    	}
	    });
	   
	    return UserProfileView;
});