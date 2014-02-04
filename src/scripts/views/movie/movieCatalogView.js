define([
    'marionette',
    'collections/movies',
    'views/shared/movieSearchForm',
    'views/movie/movieListView',
    'hbs!templates/movie/catalog'
], function(Marionette, MovieCollection, MovieSearchForm, MovieListView, template) {

    return Backbone.Marionette.Layout.extend({

        template: template,

        //
        // Define regions in layout.
        //
        regions: {
            'form': '[data-region=form]',
            'list': '[data-region=list]'
        },

        //
        // instantiate MovieCollection and fetch.
        //
        initialize: function() {
            this.collection = new MovieCollection();
            this.collection.fetch({
                data: {
                    limit: 10
                }
            });
        },

        //
        // Render form and list views in layout regions.
        //
        onRender: function() {
            var formView = new MovieSearchForm({
                collection: this.collection
            });
            var listView = new MovieListView({
                collection: this.collection
            });
            this.form.show(formView);
            this.list.show(listView);
        }
    });
});