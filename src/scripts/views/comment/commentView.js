define([
    'backbone',
    'marionette',
    'models/comment',
    'views/comment/commentItemView',
    'hbs!templates/comment/list'
], function(Backbone, Marionette, Comment, CommentItemView, template) {

    var CommentView = Backbone.Marionette.CompositeView.extend({

        //
        // @param  {Object} options - target user or movie for comment.
        // 
        initialize: function(options) {
            this.target = options.target;
        },

        template: template,
        itemView: CommentItemView,
        itemViewContainer: '.comment-list',

        ui: {
            commentForm: '.comment-form',
            commentContent: '[role=commentContent]'
        },

        events: {
            'submit @ui.commentForm': 'onCommentFormSubmit'
        },

        //
        // Save comment with comment target configuration.
        // 
        onCommentFormSubmit: function() {
            var self = this;
            var comment = new Comment();
            comment.set('content', this.ui.commentContent.val());
            comment.set(this.target.libelle, this.target.value);
            comment.save(null, {
                success: function() {
                    self.collection.add(comment);
                    self.ui.commentContent.val('');
                }
            });

            return false;
        }

    });

    return CommentView;
});