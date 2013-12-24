define([
	'backbone',
	'jquery'
	], function(Backbone, $){

		var Movie = Backbone.Model.extend({

			urlRoot : 'http://gangofbb.bhtz.fr/api/movies/',

			initialize: function () {
				$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        			options.xhrFields = {
          				withCredentials: true
        			};
        		});
			},

			like: function (success, error) {
				var self = this;
				var likeUrl = self.urlRoot + this.id + '/like';
				$.ajax({
					url: likeUrl,
					type: 'POST',
					success: function(data){
						self.set("isliked", true);
						if(success){success();}
					},
					error: function(){
						error();
					}
				});
			},

			dislike: function (success, error) {
				var self = this;
				var likeUrl = self.urlRoot + this.id + '/dislike';
				$.ajax({
					url: likeUrl,
					type: 'POST',
					success: function(data){
						self.set("isliked", false);
						if(success){success();}
					},
					error: error
				});
			}

		});
		
		return Movie;
});