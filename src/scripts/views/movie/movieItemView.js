define([
	'backbone',
	'marionette',
	'hbs!templates/movie/item'
	], function(Backbone, Marionette, template) {
   
		var MovieItemView = Backbone.Marionette.ItemView.extend({

		  	template: template,

		  	initialize: function () {
		  		
		  	},

		  	ui:{
		  		item: '.movie-item'
		  	},

		  	events:{
		  		'click @ui.item': 'onItemClick'
		  	},

		  	onItemClick: function () {
		  		Backbone.history.navigate('#/movies/'+this.model.get('id'));
		  	}
		});

		return MovieItemView;
});