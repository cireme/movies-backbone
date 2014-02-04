define([
    'backbone',
    'marionette',
    'models/movie',
    'collections/comments',
    'views/comment/commentView',
    'hbs!templates/movie/show'
], function(Backbone, Marionette, Movie, CommentCollection, CommentView, template) {

    var MovieShowView = Backbone.Marionette.ItemView.extend({

        template: template,

        initialize: function(options) {
            var self = this;
            this.vent = options.vent;

            this.listenTo(this.model, 'change', this.render);

            this.comments = new CommentCollection(this.model.toJSON().comments.items);
            this.commentView = new CommentView({
                collection: this.comments,
                target: {
                    libelle: 'movieId',
                    value: self.model.get("id")
                }
            });
        },

        ui: {
            commentArea: '.comment-area',
            likeButton: '[role=like]',
            dislikeButton: '[role=dislike]'
        },

        events: {
            'click @ui.likeButton': 'like',
            'click @ui.dislikeButton': 'dislike'
        },

        onRender: function() {
            this.ui.commentArea.html(this.commentView.render().el);
        },

        //
        // Like model and trigger event.
        //
        like: function(e) {
            var self = this;
            this.model.like(function() {
                self.vent.trigger('add:favoriteMovies', self.model);
            }, function(error) {
                alert(error);
            });
        },

        //
        // Dislike model and trigger event.
        //
        dislike: function(e) {
            var self = this;
            this.model.dislike(function() {
                self.vent.trigger('remove:favoriteMovies', self.model);
            }, function(error) {
                alert(error);
            });
        }
    });

    return MovieShowView;
});