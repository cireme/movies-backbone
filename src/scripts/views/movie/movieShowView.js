define([
	'backbone',
	'marionette',
	'models/movie',
	'hbs!templates/movie/show'
	], function(Backbone, Marionette, Movie, template) {
   
		var MovieShowView = Backbone.Marionette.ItemView.extend({

		  	template: template,

		  	initialize: function (options) {
		  		this.listenTo(this.model, 'change', this.render);
		  	},

		  	ui:{
		  		likeButton: '[role=like]',
		  		dislikeButton: '[role=dislike]'
		  	},

		  	events:{
		  		'click @ui.likeButton': 'like',
		  		'click @ui.dislikeButton': 'dislike'
		  	},

			/**
			 * like model
			 */
			like: function (e) {
				this.model.like(null,function(error){
					alert(error);
				});
			},

			/**
			 * dislike model
			 */
			dislike: function (e) {
				this.model.dislike(null,function(error){
					alert(error);
				});
			}
		});

		return MovieShowView;
});