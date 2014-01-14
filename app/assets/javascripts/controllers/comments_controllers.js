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
FlexiconEmber.CommentsNewController = Ember.ObjectController.extend({
	buttonTitle: 'Add Comment',
	anEntry: null,
	create: function() {
		cmt = this.get('content').get('comment');
		if (cmt && cmt.length > 0) {
			this.get('content').set('entry', this.anEntry);
			this.get('content').set('user', FlexiconEmber.Auth.get('user'));
			this.get('content').transaction.commit();
			this.get('content').one("didCreate", this, function() {
				this.set('content', FlexiconEmber.Comment.createRecord());
			});
			this.get('content').on("becameInvalid", this, function() {
				this.get('content').set('entry', null);
				this.set('content', FlexiconEmber.Comment.createRecord());
			});
			this.get('content').on("becameError", this, function() {
				this.get('content').set('entry', null);
				this.set('content', FlexiconEmber.Comment.createRecord());
			});
		}
	}
});

FlexiconEmber.CommentsShowController = Ember.ObjectController.extend({
	upvote: function() {
		var ctrl = this;
		if (!FlexiconEmber.Auth.get('signedIn')) {
			return;
		}
		$.getJSON('comment/upvote/' + ctrl.get('model').get('id') + '.json?auth_token=' + FlexiconEmber.Auth.get('authToken'), function(data) {
		    if (data && !data.already_voted) {
		        ctrl.get('model').reload();
		    } else {
				FlexiconEmber.HandleErrors("You've already voted for this comment!");
		    }
		});
	},
	downvote: function() {
		var ctrl = this;
		if (!FlexiconEmber.Auth.get('signedIn')) {
			return;
		}
		$.getJSON('comment/downvote/' + ctrl.get('model').get('id') + '.json?auth_token=' + FlexiconEmber.Auth.get('authToken'), function(data) {
		    if (data && !data.already_voted) {
		        ctrl.get('model').reload();
		    } else {
		        FlexiconEmber.HandleErrors("You've already voted against this comment!")
		    }
		});
	}
});