/*
 * Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
*/
FlexiconEmber.AuthSignOutView = Ember.View.extend({
	templateName: "auth/sign-out",


	submit: function(event, view) {
		event.preventDefault();
		event.stopPropagation();

		FlexiconEmber.Auth.signOut({
			data: {
				'email': FlexiconEmber.Auth.get('user').get('email')
			}
		});
	}
});