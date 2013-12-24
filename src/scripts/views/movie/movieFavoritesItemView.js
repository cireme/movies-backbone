define([
	'backbone',
	'marionette',
	'hbs!templates/movie/favoriteMovieItems'
	], function(Backbone, Marionette, template) {
   
	    var MovieFavoritesItemView = Backbone.Marionette.ItemView.extend({
			template: template
	    });
	   
	    return MovieFavoritesItemView; 
});