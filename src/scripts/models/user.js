define(['backbone'], function(Backbone){

	var User = Backbone.Model.extend({

		url: 'http://gangofbb.bhtz.fr/api/users/self',
		
		initialize: function () {
			$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    			options.xhrFields = {
      				withCredentials: true
    			};
    		});
		}
	});

	return User;
});