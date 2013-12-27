define([
	'backbone',
	'marionette',
	'collections/movies',
	'views/movie/movieItemView'
	], function(Backbone, Marionette, MovieCollection, MovieItemView) {
   
	    var MovieListView = Backbone.Marionette.CollectionView.extend({

	    	initialize: function () {
				this.collection = new MovieCollection();
                this.collection.fetch();
	    	},

	    	itemView: MovieItemView,

	    	onRender: function () {
                console.log("attach infinite scroll plugin here ");
            },
	    });
	   
	    return MovieListView;
});