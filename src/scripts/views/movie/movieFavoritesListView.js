define([
	'backbone',
	'marionette',
	'views/movie/movieFavoritesItemView'
	], function(Backbone, Marionette, MovieFavoritesItemView) {
   
	    var MovieFavoritesListView = Backbone.Marionette.CollectionView.extend({
			itemView: MovieFavoritesItemView
	    });
	   
	    return MovieFavoritesListView; 
});