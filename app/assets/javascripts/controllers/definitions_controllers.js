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
FlexiconEmber.DefinitionsNewController = Ember.ObjectController.extend({
	create: function() {
		this.content.one("didCreate", this, function() {
			this.transitionToRoute('entries.show', this.get('entry'));
		});
		this.content.set('entry', this.get('entry'));
		this.content.set('user', FlexiconEmber.Auth.get('user'));
		this.content.transaction.commit();
	}, cancel: function() {
		this.content.transaction.rollback();
		window.history.back();
	}
});

FlexiconEmber.DefinitionsShowController = Ember.ObjectController.extend({
	displayArtifacts: false,
	showArtifacts: function() {
		this.set('displayArtifacts', true);
	},
	hideArtifacts: function() {
		this.set('displayArtifacts', false);
	},
	upvote: function() {
		var ctrl = this;
		if (!FlexiconEmber.Auth.get('signedIn')) {
			return;
		}
		$.getJSON('definition/upvote/' + ctrl.get('model').get('id') + '.json?auth_token=' + FlexiconEmber.Auth.get('authToken'), function(data) {
		    if (data && !data.already_voted) {
		        ctrl.get('model').reload();
		    } else {
				FlexiconEmber.HandleErrors("You've already voted for this definition!");
		    }
		});
	},
	downvote: function() {
		var ctrl = this;
		if (!FlexiconEmber.Auth.get('signedIn')) {
			return;
		}
		$.getJSON('definition/downvote/' + ctrl.get('model').get('id') + '.json?auth_token=' + FlexiconEmber.Auth.get('authToken'), function(data) {
		    if (data && !data.already_voted) {
		        ctrl.get('model').reload();
		    } else {
				FlexiconEmber.HandleErrors("You've already voted against this definition!");
		    }
		});
	}
});

FlexiconEmber.DefinitionsIndexController = Ember.ArrayController.extend({
	
});