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
FlexiconEmber.CommentsRoute = Ember.Route.extend({

});

FlexiconEmber.CommentsIndexRoute = FlexiconEmber.CommentsRoute.extend({
	model: function() {
		return FlexiconEmber.Comment.find();
	}
});

FlexiconEmber.CommentsNewRoute = FlexiconEmber.CommentsRoute.extend({

});

FlexiconEmber.CommentRoute = FlexiconEmber.CommentsRoute.extend({
	
});
