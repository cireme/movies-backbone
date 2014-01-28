define([
    'backbone',
    'models/movie'
], function(Backbone, Movie) {

    var FavoritesMovies = Backbone.Collection.extend({

        //
        // Configure to send cookies with ajax request.
        //
        initialize: function(options) {
            this.userId = options.userId;
            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                options.xhrFields = {
                    withCredentials: true
                };
            });
        },

        model: Movie,

        //
        // Dynamique url based on userId.
        //
        url: function() {
            return 'http://gangofbb.bhtz.fr/api/users/' + this.userId + '/movies';
        }
    });

    return FavoritesMovies;
});