define([
    'backbone',
    'marionette',
    'hbs!templates/comment/item'
], function(Backbone, Marionette, template) {

    var CommentItemView = Backbone.Marionette.ItemView.extend({

        template: template,

        ui: {
            removeButton: '[role=deleteComment]'
        },

        events: {
            'click @ui.removeButton': 'removeItem'
        },

        removeItem: function() {
            this.model.destroy();
            this.remove();
        }
    });

    return CommentItemView;
});