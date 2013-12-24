define([
    'backbone', 
    'marionette',
    'models/movie',
    'models/user',
    'collections/favoritesMovies',
    'views/movie/movieListView',
    'views/movie/movieShowView',
    'views/user/userNavbarInfosView',
    'views/movie/movieFavoritesListView'
    ],
    function (
        Backbone, 
        Marionette, 
        Movie, 
        User, 
        FavoritesMovies, 
        MovieListView, 
        MovieShowView, 
        UserNavbarInfosView,
        MovieFavoritesListView
        ) {

        var controller = Backbone.Marionette.Controller.extend({

            initialize:function (options) {
                var self = this;
                this.App = options.App;

                this.user = new User();
                this.listenTo(this.user, 'change', this.showUserInfosHeader);
                this.user.fetch({success:function () {
                    self.showFavoritesMovies(self.user.id);
                }});
            },

            /**
             * home view - listing movies
             */
            home: function(){
                this.App.mainRegion.show(new MovieListView());
            },

            /**
             * show movie view
             * @param  {Integer} id
             */
            showMovie: function (id) {
                var self = this;
                var movie = new Movie({id: id});
                movie.fetch({success: function () {
                    self.App.mainRegion.show(new MovieShowView({model: movie}));
                }});
            },

            /**
             * display user info view in navigation bar.
             */
            showUserInfosHeader: function () {
                var self = this;
                self.App.navigationRegion.show(new UserNavbarInfosView({model: self.user}));
            },

            showFavoritesMovies: function (id) {
                var self = this;
                var favoritesMovies = new FavoritesMovies({userId: id});
                favoritesMovies.fetch({success: function () {
                    self.App.sidebarRegion.show(new MovieFavoritesListView({collection: favoritesMovies}));
                }});
            }
        });

        return controller;
});