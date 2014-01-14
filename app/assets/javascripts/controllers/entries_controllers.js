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
FlexiconEmber.EntriesNewController = Ember.ObjectController.extend({
	create: function() {

// 		THIS SHOULD WORK PROPERLY, BUT EMBERJS HAS A BUG...		
//		this.content.one("didCreate", this, function() {
//			this.transitionToRoute('entries.show', this.get('model'));
//		});
//		SO WE DO THIS INSTEAD:
		this.content.addObserver('id', this, function() {
			FlexiconEmber.set("activeLanguages", FlexiconEmber.Language.find({type: 'active'}));
			this.transitionToRoute('entries.show', this.get('model'));
		});
		
		this.content.one("becameInvalid", this, function(errors) {
			FlexiconEmber.HandleErrors(errors);
		});
		this.content.set('user', FlexiconEmber.Auth.get('user'));
		this.content.transaction.commit();
	}
});

FlexiconEmber.EntriesIndexController = Ember.ArrayController.extend({
	sortProperties: ['language.fullName', 'term'],
	sortAsending: true,
	languageDidChange: function() {
		if (FlexiconEmber.selectedLanguage) {
			this.set('content', FlexiconEmber.Entry.find({language: FlexiconEmber.selectedLanguage.get('id')}));
		} else {
			this.set('content', FlexiconEmber.Entry.find());
		}
		// action taken when user selects item in the languages dropdown
	}.observes('FlexiconEmber.selectedLanguage')
});

FlexiconEmber.EntriesRandomController = Ember.ObjectController.extend({

});

FlexiconEmber.EntriesSearchController = Ember.ArrayController.extend({

});

FlexiconEmber.EntriesShowController = Ember.ObjectController.extend({
	newCommentShown: false,
	showCommentForm: function() {
		this.set('newCommentShown', true);
	},
	hideCommentForm: function() {
		this.set('newCommentShown', false);
	}
});
