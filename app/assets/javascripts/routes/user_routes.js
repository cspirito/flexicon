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
FlexiconEmber.UsersRoute = Ember.Route.extend({
	
});

FlexiconEmber.UsersEditRoute = FlexiconEmber.UsersRoute.extend({
	setupController: function(c, m) {
		usr = FlexiconEmber.Auth.get('user');
		if (usr && m.get('id') == usr.get('id')) {
			c.set('content', m);
		} else {
			this.transitionTo("index");
		}
	}
});

FlexiconEmber.UsersShowRoute = FlexiconEmber.UsersRoute.extend({
	setupController: function(c, m) {
		c.set('model', m);
		if (m) {
			m.reload(); // reload the record to make sure all information is up-to-date
		}
	}
});

FlexiconEmber.UsersNewRoute = FlexiconEmber.UsersRoute.extend({
	model: function() {
		return FlexiconEmber.User.createRecord();
	}, deactivate: function() { // undo model if it isn't saved, so Ember doesn't cache non-persistent model.
		var mod = this.controllerFor('users.new').get('content');
		if (!mod.get('id')) {
			mod.get('transaction').rollback();
		}
	}
});

FlexiconEmber.UserRoute = FlexiconEmber.UsersRoute.extend({

});

FlexiconEmber.UsersIndexRoute = FlexiconEmber.UsersRoute.extend({
	model: function() {
		return FlexiconEmber.User.find();
	}
});