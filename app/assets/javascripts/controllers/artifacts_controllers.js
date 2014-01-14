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
FlexiconEmber.ArtifactsController = Ember.ArrayController.extend({

});

FlexiconEmber.ArtifactsNewController = Ember.ObjectController.extend({
	needs: ['definition'],
	create: function() {
		this.content.one("didCreate", this, function() {
			definition = this.get('controllers.definition.content');
			this.transitionToRoute('entries.show', definition.get('entry'));
		});
		definition = this.get('controllers.definition.content');
		this.content.set('definition', definition);
		this.content.set('user', FlexiconEmber.Auth.get('user'));
		this.content.transaction.commit();
	}, cancel: function() {
		this.content.transaction.rollback();
		window.history.back();
	}
});