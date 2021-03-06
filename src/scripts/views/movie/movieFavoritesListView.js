define([
    'backbone',
    'marionette',
    'views/movie/movieFavoritesItemView',
    'hbs!templates/movie/favoriteMovie'
], function(Backbone, Marionette, MovieFavoritesItemView, template) {

    var MovieFavoritesListView = Backbone.Marionette.CompositeView.extend({

        //
        // Add event agregator handlers.
        //
        initialize: function(options) {
            var self = this;
            this.vent = options.vent;

            this.vent.on('add:favoriteMovies', function(movie) {
                self.addFavoriteMovie(movie);
            });

            this.vent.on('remove:favoriteMovies', function(movie) {
                self.removeFavoriteMovie(movie);
            });
        },

        template: template,
        itemView: MovieFavoritesItemView,
        itemViewContainer: '.movie-favorites-list',

        //
        // event aggregator callback.
        //
        addFavoriteMovie: function(movie) {
            this.collection.add(movie);
        },

        //
        // remove favorite movie.
        //
        removeFavoriteMovie: function(movie) {
            this.collection.remove(movie);
        }
    });

    return MovieFavoritesListView;
});