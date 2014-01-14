/*
 * NOTICE
 * 
 * This software was produced for the U. S. Government
 * under Contract No. FA8702-13-C-0001, and is
 * subject to the Rights in Noncommercial Computer Software
 * and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)
 *
 *  2013 The MITRE Corporation. All Rights Reserved.
*/
FlexiconEmber.UsersEditController = Ember.ObjectController.extend({
	buttonTitle: 'Submit',
	create: function() {
		this.content.one('didUpdate', this, function() {
			this.transitionToRoute("users.show", this.content);
		});
		this.content.transaction.commit();
	}, cancel: function() {
		this.content.transaction.rollback();
		this.transitionToRoute("users.show", this.content);
	}
});

FlexiconEmber.UsersNewController = Ember.ObjectController.extend({
	buttonTitle: 'Submit',
	create: function() {
		if (this.content.get('password') != this.content.get('passwordConfirm')) {
	        FlexiconEmber.HandleErrors("The passwords entered do not match!");
			return;
		}
		this.content.addObserver('id', this, function() {
			this.transitionToRoute("index");
		});
		this.content.one('becameInvalid', this, function(errors) {
			FlexiconEmber.HandleErrors(errors);
			$('#myModal').modal('show');
		});
		this.content.transaction.commit();
	}, cancel: function() {
		this.content.transaction.rollback();
		window.history.back();
	}
});