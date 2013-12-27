define([
	'backbone',
    'backbone-validation',
	'marionette',
    'backbone.stickit',
	'hbs!templates/user/editProfile'
	], function(Backbone, BackboneValidation, Marionette, BackboneStickit, template){
   
        var UserEditProfileView = Backbone.Marionette.ItemView.extend({

            /**
             * initialize view
             * instantiate view model and bind backbone validation.
             */
        	initialize: function () {
                this.viewModel = this.model.clone();
                Backbone.Validation.bind(this, { model: this.viewModel });
        	},

            onRender: function () {
                //this.stickit(this.viewModel);
            },

        	template: template,

            ui:{
                form: 'form.userForm',

                // form inputs
                firstnameInput: '#firstname',
                lastnameInput: '#lastname',
                emailInput: '#email',
                cityInput: '#city',
                birthdayInput: '#birthday',

                //validators block
                firstnameValidator: '#firstnameValidator',
                lastnameValidator: '#lastnameValidator',
                emailValidator: '#emailValidator'
            },

            events:{
                'submit @ui.form': 'onFormSubmit',
                'keyup @ui.firstnameInput': 'onChangeFirstnameInput',
                'keyup @ui.lastnameInput': 'onChangeLastnameInput',
                'keyup @ui.emailInput': 'onChangeEmailInput'
            },

          /*bindings: {
                '#firstname': {observe: 'firstname', onSet: 'onChangeFirstnameInput'},
                '#lastname': {observe: 'lastname', onSet: 'onChangeLastnameInput'},
                '#email': {observe: 'email', onSet: 'onChangeEmailInput'},
                '#city': 'city',
                '#birthday': 'birthday'
            },*/

            /**
             * handled when user form submited
             */
            onFormSubmit: function () {
                this.updateViewModelFromInputs();

                if(this.viewModel.isValid(true)){
                    this.model.set(this.viewModel.attributes);
                    this.model.save(null, {success: function () {
                        Backbone.history.navigate('#/profile');
                    }});
                }else{
                    alert('profile form is not valid !');
                }

                return false;
            },

            updateViewModelFromInputs: function () {
                this.viewModel.set('firstname', this.ui.firstnameInput.val());
                this.viewModel.set('lastname', this.ui.lastnameInput.val());
                this.viewModel.set('email', this.ui.emailInput.val());
                this.viewModel.set('city', this.ui.cityInput.val());
                this.viewModel.set('birthday', this.ui.birthdayInput.val());
            },
            
            onChangeFirstnameInput: function (e) {
                var errorMessage = this.viewModel.preValidate('firstname', this.ui.firstnameInput.val());
                this.ui.firstnameValidator.html(errorMessage);
            },

            onChangeLastnameInput: function (e) {
                var errorMessage = this.viewModel.preValidate('lastname', this.ui.lastnameInput.val());
                this.ui.lastnameValidator.html(errorMessage);
            },

            onChangeEmailInput: function (e) {
                var errorMessage = this.viewModel.preValidate('email', this.ui.emailInput.val());
                this.ui.emailValidator.html(errorMessage);
            },

            /**
             * remove stickit two-way binding
             */
            onBeforeClose: function(){
                //this.unstickit();
            }

        });
       
        return UserEditProfileView; 
});