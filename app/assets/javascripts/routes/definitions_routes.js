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
FlexiconEmber.DefinitionsRoute = Ember.Route.extend({
	
});

FlexiconEmber.DefinitionsIndexRoute = FlexiconEmber.DefinitionsRoute.extend({
	model: function() {
		return FlexiconEmber.Definition.find();
	}
});

FlexiconEmber.DefinitionsNewRoute = FlexiconEmber.DefinitionsRoute.extend({
	setupController: function(ctrl, mod) {
		ctrl.set('content', FlexiconEmber.Definition.createRecord());
		var entry = this.controllerFor('entries.show').get("content");
		if (!entry) {
			entry = this.controllerFor('entries.random').get("content");
		}
		ctrl.set('entry', entry);
	}, deactivate: function() {
		// rollback changes in the case that a definition was not made. AKA: undo creating empty model.
		var mod = this.controllerFor('definitions.new').get('model');
		if (mod && mod.get('isNew') && !mod.get('isSaving')) {
			mod.get("transaction").rollback();
		}
	}
});

FlexiconEmber.DefinitionRoute = FlexiconEmber.DefinitionsRoute.extend({

});
