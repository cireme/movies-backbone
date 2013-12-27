define(['backbone'], function(Backbone) {
   
    var Comment = Backbone.Model.extend({
    	urlRoot: 'http://gangofbb.bhtz.fr/api/comments/',
    });
   
    return Comment;
});