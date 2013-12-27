define([
	'backbone',
    'backbone-validation',
	'marionette',
    'backbone.stickit',
	'hbs!templates/user/editProfile'
	], function(Backbone, BackboneValidation, Marionette, BackboneStickit, template){
   
        var UserEditProfileView = Backbone.Marionette.ItemView.extend({

        	initialize: function () {
                this.viewmodel = this.model.clone();
                console.log(this.viewmodel);
                Backbone.Validation.bind(this, {model: this.viewmodel});
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
                'submit @ui.form': 'onFormSubmit'
/*              'keyup @ui.firstnameInput': 'onChangeFirstnameInput',
                'keyup @ui.lastnameInput': 'onChangeLastnameInput',
                'keyup @ui.emailInput': 'onChangeEmailInput'*/
            },

            /**
             * handled when user form submited
             */
            onFormSubmit: function () {
                console.log(this.viewmodel);
                if(this.viewmodel.isValid(true)){
                    this.model = this.viewmodel.clone();
                    this.model.save(null, {success: function () {
                        Backbone.history.navigate('#/profile');
                    }});
                }else{
                    alert('profile form is not valid !');
                }

                return false;
            },

            /**
             * Backbone stickit sample code for two way data-binding.
             */
            
            bindings: {
                '#firstname': {observe: 'firstname', onSet: 'onChangeFirstnameInput'},
                '#lastname': {observe: 'lastname', onSet: 'onChangeLastnameInput'},
                '#email': {observe: 'email', onSet: 'onChangeEmailInput'},
                '#city': {observe: 'city', onSet: 'onSetCity'},
                '#birthday': {observe: 'birthday', onSet: 'onSetBirthday'}
            },

            onRender: function () {
                this.stickit(this.viewmodel);
            },

            /**
             * set model properties from form inputs values.
             */
/*            setModelProperties: function () {
                this.viewmodel.set("firstname", this.ui.firstnameInput.val());
                this.viewmodel.set("lastname", this.ui.lastnameInput.val());
                this.viewmodel.set("email", this.ui.emailInput.val());
                this.viewmodel.set("city", this.ui.cityInput.val());
                this.viewmodel.set("birthday", this.ui.birthdayInput.val());
            },*/

            onChangeFirstnameInput: function (value, options) {
                var errorMessage = this.viewmodel.preValidate('firstname', value);
                this.ui.firstnameValidator.html(errorMessage);
            },

            onChangeLastnameInput: function (value, options) {
                var errorMessage = this.viewmodel.preValidate('lastname', value);
                this.ui.lastnameValidator.html(errorMessage);
            },

            onChangeEmailInput: function (value, options) {
                var errorMessage = this.viewmodel.preValidate('email', value);
                this.ui.emailValidator.html(errorMessage);
            }

        });
       
        return UserEditProfileView; 
});