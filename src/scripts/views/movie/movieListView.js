define([
        'marionette',
        'views/movie/movieItemView',
    ],
    function(Marionette, MovieItemView) {

        return Backbone.Marionette.CollectionView.extend({

            itemView: MovieItemView,
            className: 'movie-list',

            initialize: function() {
                this.page = 1;
                this.isLoading = false;
                this.isAllDataLoaded = false;
            },

            events: {
                'scroll': 'checkScroll'
            },

            checkScroll: function() {
                var triggerPoint = 50;
                if (!this.isLoading && !this.isAllDataLoaded && this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight) {
                    this.page += 1;
                    this.loadNextMovies();
                }
            },

            loadNextMovies: function() {
                var self = this;
                this.isLoading = true;

                this.collection.fetch({
                    data: {
                        limit: 10 * this.page
                    },
                    success: function(movies) {
                        self.isLoading = false;
                        self.isAllDataLoaded = movies.length < (self.page * 10);
                    },
                    error: function() {
                        self.isLoading = false;
                        console.log('error during fetching data');
                    }
                });
            }
        });
    });