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
//
/*
* To activate a locale, it must be set in application.js by Locale name.
*/
FlexiconEmber.SV = {
	'home.title': "",
	'actions': "",
	'feedback.send': "",
	'search': "",
	'search.empty': "",
	'send': "",
	'cancel': "",
	'hide': "",
	'stats': {
		'karma': "",
		'karma.definition': "",
		'karma.comment': "",
		'submission': "",
		'votes': "",
		'votes.up': "",
		'votes.down': "",
		'votes.total': "",
	},
	'user': {
		'title': "",
		'login': "",
		'logout': "",
		'signup': "",
		'profile': "",
		'view': "",
		'edit': "",
		'account': "",
		'account.new': "",
		'name': "",
		'email': "",
		'jobtitle': "",
		'organization': "",
		'phone': "",
		'password': "",
		'password.confirm': ""
		
	},
	'entry': {
		'new': "",
		'random.view': "",
		'title': "",
		'term': "",
		'found': ""
	},
	'definition': {
		'add': "",
		'title': ""
	},
	'language': {
		'flexicon': "",
		'preferred': "",
		'title': ""
	},
	'artifact': {
		'title': "",
		'add': "",
		'index': "",
		'source': "",
		'usage': "",
		'notes': "",
		'classification': "",
		'translation': ""
	},
	'comment': {
		'section': "",
		'add': "",
		'requirement': "",
		'new': ""
	}
};
if (Em.LOCALE == "sv") {
	Em.I18n.translations = FlexiconEmber.SV;
}