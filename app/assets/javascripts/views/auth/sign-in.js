/*
 * Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
*/
FlexiconEmber.AuthSignInView = Ember.View.extend({
	templateName: "auth/sign-in",

	email: null,
	password: null,
	remember: true,

	submit: function(event, view) {
		event.preventDefault();
		event.stopPropagation();

		FlexiconEmber.Auth.signIn({
			data : {
				'email': this.get('email'),
				'password': this.get('password'),
				'remember': this.get('remember')
			}
		})
	}
});