define([
    'backbone', 
    'marionette',
    'models/movie',
    'collections/favoritesMovies',
    'views/movie/movieListView',
    'views/movie/movieShowView',
    'views/user/userNavbarInfosView',
    'views/movie/movieFavoritesListView',
    'views/user/userProfileView',
    'views/user/userEditProfileView',
    ],
    function (
        Backbone, 
        Marionette, 
        Movie,
        FavoritesMovies, 
        MovieListView, 
        MovieShowView, 
        UserNavbarInfosView,
        MovieFavoritesListView,
        UserProfileView,
        UserEditProfileView
        ) {

        var controller = Backbone.Marionette.Controller.extend({

            initialize:function (options) {
                var self = this;
                this.App = options.App;
                this.user = options.user;
                this.listenTo(this.user, 'change', this.showUserInfosHeader);

                this.showFavoritesMovies();
                this.showUserInfosHeader();
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
                this.App.navigationRegion.show(new UserNavbarInfosView({model: this.user}));
            },

            /**
             * show favorites movies in sidebar region
             */
            showFavoritesMovies: function () {
                var self = this;
                var id = this.user.get('id');
                var favoritesMovies = new FavoritesMovies({userId: id});
                favoritesMovies.fetch({success: function () {
                    self.App.sidebarRegion.show(new MovieFavoritesListView({collection: favoritesMovies}));
                }});
            },

            /**
             * show profile view in mainRegion
             */
            profile: function () {
                this.App.mainRegion.show(new UserProfileView({model: this.user}));
            },

            /**
             * edit profile view
             */
            editProfile: function () {
                this.App.mainRegion.show(new UserEditProfileView({model: this.user}));
            }
        });

        return controller;
});