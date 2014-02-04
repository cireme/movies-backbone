define([
    'backbone',
    'backbone-validation',
    'marionette',
    'backbone.stickit',
    'hbs!templates/user/editProfile'
], function(Backbone, BackboneValidation, Marionette, BackboneStickit, template) {

    var UserEditProfileView = Backbone.Marionette.ItemView.extend({

        //
        // instantiate view model and bind backbone validation.
        //
        initialize: function() {
            this.viewModel = this.model.clone();
            this.listenTo(this.viewModel, 'change', this.onViewModelChange);

            this.normalizeUIKeys(this.bindings);

            Backbone.Validation.bind(this, {
                model: this.viewModel,
                valid: this.onValid,
                invalid: this.onInvalid
            });
        },

        //
        // initialize two-way data bindings with stickit.
        //
        onRender: function() {
            this.stickit(this.viewModel, this.bindings);
        },

        template: template,

        ui: {
            form: 'form.userForm',

            // form inputs
            firstname: '#firstname',
            lastname: '#lastname',
            email: '#email',
            city: '#city',
            birthday: '#birthday',

            //validators block
            firstnameValidator: '#firstnameValidator',
            lastnameValidator: '#lastnameValidator',
            emailValidator: '#emailValidator'
        },

        events: {
            'submit @ui.form': 'onFormSubmit'
        },

        bindings: {
            '@ui.firstname': 'firstname',
            '@ui.lastname': 'lastname',
            '@ui.email': 'email',
            '@ui.city': 'city',
            '@ui.birthday': 'birthday'
        },

        //
        // handled when user form submited
        //
        onFormSubmit: function() {
            if (this.viewModel.isValid(true)) {
                this.model.set(this.viewModel.attributes);
                this.model.save(null, {
                    success: function() {
                        Backbone.history.navigate('#/profile');
                    }
                });
            } else {
                alert('profile form is not valid !');
            }

            return false;
        },

        onViewModelChange: function() {
            this.viewModel.validate(this.viewModel.changedAttributes());
        },

        onValid: function(view, attr) {
            view.ui[attr].parent().addClass('has-success');
            view.ui[attr].next().html('');
        },

        onInvalid: function(view, attr) {
            view.ui[attr].parent().removeClass('has-success').addClass('has-error');
            var errorMessage = view.viewModel.preValidate(attr, view.viewModel[attr]);
            view.ui[attr].next().html(errorMessage);
        },

        //
        // remove stickit two-way binding
        //
        onBeforeClose: function() {
            this.unstickit();
        }

    });

    return UserEditProfileView;
});