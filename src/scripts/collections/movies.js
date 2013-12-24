define([
	'backbone',
	'models/movie'
	], function(Backbone, Movie){

		var MovieCollection = Backbone.Collection.extend({
	  		model: Movie,
	  		url: 'http://gangofbb.bhtz.fr/api/movies'
		});

		return MovieCollection;
});