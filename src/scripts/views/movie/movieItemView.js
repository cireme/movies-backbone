define([
    'backbone',
    'marionette',
    'hbs!templates/movie/item'
], function(Backbone, Marionette, template) {

    var MovieItemView = Backbone.Marionette.ItemView.extend({

        className: 'panel panel-default pull-left movie-item animated fadeIn',

        template: template,

        events: {
            'click': 'onItemClick'
        },

        initialize: function() {},

        onItemClick: function() {
            Backbone.history.navigate('#/movies/' + this.model.get('id'));
        }
    });

    return MovieItemView;
});