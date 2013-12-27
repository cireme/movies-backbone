define(['backbone', 'backbone-validation'], function(Backbone, BackboneValidation){

	var User = Backbone.Model.extend({

		url: 'http://gangofbb.bhtz.fr/api/users/self',
		
		initialize: function () {
			$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    			options.xhrFields = {
      				withCredentials: true
    			};
    		});
		},

		validation: {

			firstname: {
				required: true,
				msg: 'Please enter a firstname'
			},

			lastname: {
				required: true,
				msg: 'Please enter a lastname'
			},
			
			email: [
				{
					required: true,
					msg: 'Please enter an email address'
				},
				{
					pattern: 'email',
					msg: 'Please enter a valid email'
				}
			]
		}
	});

	return User;
});