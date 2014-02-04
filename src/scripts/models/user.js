define(['backbone', 'backbone-validation'], function(Backbone, BackboneValidation) {

    var User = Backbone.Model.extend({

        url: 'http://gangofbb.bhtz.fr/api/users/self',

        //
        // Send credentials during ajax request.
        //
        initialize: function() {
            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                options.xhrFields = {
                    withCredentials: true
                };
            });
        },

        //
        // Adding validation rules with backbone validation.
        //
        validation: {
            firstname: {
                required: true,
                minLength: 2,
                msg: 'Please enter a firstname with 2 caracters min'
            },

            lastname: {
                required: true,
                msg: 'Please enter a lastname'
            },

            email: [{
                required: true,
                msg: 'Please enter an email address'
            }, {
                pattern: 'email',
                msg: 'Please enter a valid email'
            }]
        }
    });

    return User;
});