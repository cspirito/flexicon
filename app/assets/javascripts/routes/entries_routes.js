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
FlexiconEmber.EntriesRoute = Ember.Route.extend({
	
});

FlexiconEmber.EntriesIndexRoute = FlexiconEmber.EntriesRoute.extend({
	model: function() {
		return FlexiconEmber.Entry.find();
	}, setupController: function(ctrl, mod) {
		if (FlexiconEmber.selectedLanguage) {
			ctrl.set('content', FlexiconEmber.Entry.find({language: FlexiconEmber.selectedLanguage.get('id')}));
		} else {
			ctrl.set('content', FlexiconEmber.Entry.find());
		}
	}
});

FlexiconEmber.EntriesSearchRoute = FlexiconEmber.EntriesRoute.extend({
	setupController: function(ctrl, mod) {
		ctrl.set("model", FlexiconEmber.get("searchTerms"));
	}
});

FlexiconEmber.EntriesNewRoute = FlexiconEmber.EntriesRoute.extend({
	setupController: function(ctrl, mod) {
		ctrl.set('content', FlexiconEmber.Entry.createRecord());
		ctrl.set('languages', FlexiconEmber.Language.find());
	}, deactivate: function() {
		// rollback changes in the case that a entry was not made. AKA: undo creating empty model.
		var mod = this.controllerFor('entries.new').get('model');
		if (mod && mod.get('isNew') && !mod.get('isSaving')) {
			mod.get("transaction").rollback();
		}
	}
});

FlexiconEmber.EntriesShowRoute = FlexiconEmber.EntriesRoute.extend({
	setupController: function(controller, model) {
		controller.set('model', model);
		transaction = FlexiconEmber.dataStore.transaction();
		this.controllerFor('comments.new').set('content', transaction.createRecord(FlexiconEmber.Comment, {}));
		this.controllerFor('comments.new').set('anEntry', model);
	}
});
