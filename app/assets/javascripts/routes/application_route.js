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
FlexiconEmber.ApplicationRoute = Ember.Route.extend({
	setupController: function (c, m) {
		c.set("languages", FlexiconEmber.Language.find());
		FlexiconEmber.set("activeLanguages", FlexiconEmber.Language.find({type: 'active'}));
	},
	events: {
		randomTerm: function() {
			var route = this;
			FlexiconEmber.set("randomEntry", null);
			$.getJSON('entry/random.json', function(data) {
				FlexiconEmber.Entry.find(data).then(function(term) {
					FlexiconEmber.set("randomEntry", term);
					route.transitionTo('entries.show', term);
				});
			});
		},
		showSearchTerm: function() {
			var txt = $('#terminput').val();
			if (!txt || txt === '') {
				return;
			}
			var route = this;
			FlexiconEmber.set("searchTerms", null);
			$.getJSON('entry/get_id/' + txt + '.json', function(data) {
				if (data && data.length == 1) {
					FlexiconEmber.Entry.find(data[0]).then(function(term) {
						FlexiconEmber.set("searchTerms", term);
						route.transitionTo('entries.show', term);
					});
					$('#terminput').val('');
				} else if (data && data.length > 0) {
					FlexiconEmber.Entry.find({ids: data}).then(function(terms) {
						FlexiconEmber.set("searchTerms", terms);
						route.controllerFor("entries.search").set("model", terms);
						route.transitionTo('entries.search');	
					});
					$('#terminput').val('');
				} else {
					FlexiconEmber.set("searchTerms", Ember.A());
					route.controllerFor("entries.search").set("model", Ember.A());
					route.transitionTo('entries.search');
				}
			});
		}
	}
});