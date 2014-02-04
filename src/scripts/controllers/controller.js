define([
        'backbone',
        'marionette',
        'models/movie',
        'collections/favoritesMovies',
        'views/movie/movieCatalogView',
        'views/movie/movieShowView',
        'views/user/userNavbarInfosView',
        'views/movie/movieFavoritesListView',
        'views/user/userProfileView',
        'views/user/userEditProfileView',
        'views/shared/movieSearchForm',
    ],
    function(
        Backbone,
        Marionette,
        Movie,
        FavoritesMovies,
        MovieCatalogView,
        MovieShowView,
        UserNavbarInfosView,
        MovieFavoritesListView,
        UserProfileView,
        UserEditProfileView,
        MovieSearchForm
    ) {

        var controller = Backbone.Marionette.Controller.extend({

            //
            // Initialize controller with user, application and backbone event agregator.
            //
            initialize: function(options) {
                this.App = options.App;
                this.user = options.user;
                this.vent = _.extend({}, Backbone.Events);

                this.showFavoritesMovies();
                this.showUserInfosHeader();
            },

            //
            // home action.
            //
            home: function() {
                this.App.mainRegion.show(new MovieCatalogView());
            },

            //
            // show movie view by movie id in params.
            //
            showMovie: function(id) {
                var self = this;
                var movie = new Movie({
                    id: id
                });
                movie.fetch({
                    success: function() {
                        self.App.mainRegion.show(new MovieShowView({
                            model: movie,
                            vent: self.vent
                        }));
                    }
                });
            },

            //
            // display user info view in navigation bar.
            //
            showUserInfosHeader: function() {
                this.App.navigationRegion.show(new UserNavbarInfosView({
                    model: this.user
                }));
            },

            //
            // show favorites movies in sidebar region.
            //
            showFavoritesMovies: function() {
                var self = this;
                var id = this.user.get('id');
                var favoritesMovies = new FavoritesMovies({
                    userId: id
                });
                favoritesMovies.fetch({
                    success: function() {
                        self.App.sidebarRegion.show(new MovieFavoritesListView({
                            collection: favoritesMovies,
                            vent: self.vent
                        }));
                    }
                });
            },

            //
            // show profile view in mainRegion and refresh user infos.
            //
            profile: function() {
                var self = this;
                this.user.fetch({
                    success: function() {
                        self.App.mainRegion.show(new UserProfileView({
                            model: self.user
                        }));
                    }
                });
            },

            //
            // edit profile view.
            //
            editProfile: function() {
                this.App.mainRegion.show(new UserEditProfileView({
                    model: this.user
                }));
            }
        });

        return controller;
    });