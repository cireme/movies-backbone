define([
	'jquery',
	'backbone',
	'marionette',
	'collections/movies',
	'views/shared/movieSearchForm',
	'views/movie/movieItemView',
	'hbs!templates/movie/list'
	], function($, Backbone, Marionette, MovieCollection, MovieSearchForm, MovieItemView, template) {
   
	    var MovieListView = Backbone.Marionette.CompositeView.extend({

	    	initialize: function () {
	    		var self = this;
				this.collection = new MovieCollection();
                this.collection.fetch();
                this.vent = _.extend({}, Backbone.Events);
                this.movieSearchForm = new MovieSearchForm({vent: this.vent});

                this.vent.on('movieFilter', function (movieFilter) {
                	self.fetchMovies(movieFilter);
                });
	    	},

	    	template: template,
	    	itemView: MovieItemView,
			template: template,
	      	itemViewContainer: '.movie-list',

	      	ui:{
	      		searchFormArea: '.searchFormArea'
	      	},

	      	onRender: function () {
	      		this.ui.searchFormArea.html(this.movieSearchForm.render().el);
	      	},

            fetchMovies: function (filterModel) {
            	var self = this;
            	console.log(filterModel);
            	this.collection.fetch({
            		data: filterModel
            	});
            }
	    });
	   
	    return MovieListView;
});