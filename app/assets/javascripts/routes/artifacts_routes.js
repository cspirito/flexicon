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
FlexiconEmber.ArtifactsRoute = Ember.Route.extend({

});

FlexiconEmber.ArtifactsIndexRoute = FlexiconEmber.ArtifactsRoute.extend({
	model: function() {
		return FlexiconEmber.Artifact.find();
	}
});

FlexiconEmber.ArtifactsNewRoute = FlexiconEmber.ArtifactsRoute.extend({
	setupController: function(ctrl, mod) {
		ctrl.set('content', FlexiconEmber.Artifact.createRecord());
	}
});

FlexiconEmber.ArtifactRoute = FlexiconEmber.ArtifactsRoute.extend({

});
