define([
	'backbone',
	'models/movie'
	], function(Backbone, Movie){

		var FavoritesMovies = Backbone.Collection.extend({
			
			initialize:function (options) {
				this.userId = options.userId;
				$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    				options.xhrFields = {
      					withCredentials: true
    				};
    			});
			},

	  		model: Movie,

	  		url: function () {
	  			return 'http://gangofbb.bhtz.fr/api/users/'+ this.userId +'/movies';
	  		}
		});

		return FavoritesMovies;
});