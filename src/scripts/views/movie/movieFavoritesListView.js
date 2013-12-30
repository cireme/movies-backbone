define([
	'backbone',
	'marionette',
	'views/movie/movieFavoritesItemView',
	'hbs!templates/movie/favoriteMovie'
	], function(Backbone, Marionette, MovieFavoritesItemView, template) {
   
	    var MovieFavoritesListView = Backbone.Marionette.CompositeView.extend({

			initialize: function (options) {
				var self = this;
				this.vent = options.vent;

				this.vent.on('add:favoriteMovies', function (movie) {
					self.addFavoriteMovie(movie);
				});

				this.vent.on('remove:favoriteMovies', function (movie) {
					self.removeFavoriteMovie(movie);
				});
			},

			template: template,
			itemView: MovieFavoritesItemView,
			itemViewContainer: '.movie-list',

			/**
			 * event aggregator callback
			 * @param {Movie} movie
			 */
			addFavoriteMovie: function (movie) {
				this.collection.add(movie);
			},

			/**
			 * remove favorite movie
			 */
			removeFavoriteMovie: function (movie) {
				//var model =  _.findWhere(this.collection, {id: movie.get('id')});
				this.collection.remove(movie);
			}
	    });
	   
	    return MovieFavoritesListView;
});