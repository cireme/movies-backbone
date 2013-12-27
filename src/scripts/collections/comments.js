define([
	'backbone',
	'models/comment'
	], function(Backbone, Comment) {
   
	    var CommentCollection = Backbone.Collection.extend({
	    	model: Comment,
	    	url: 'http://gangofbb.bhtz.fr/api/comments/'
	    });
	   
	    return CommentCollection; 
});