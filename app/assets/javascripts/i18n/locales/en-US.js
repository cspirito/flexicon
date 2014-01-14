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
FlexiconEmber.EN_US = {
	'home.title': "Home",
	'actions': "Actions",
	'feedback.send': "Send Feedback",
	'search': "Search",
	'search.empty': "find a term...",
	'send': "Submit",
	'cancel': "Cancel",
	'hide': "Hide",
	'stats': {
		'karma': "Karma Stats",
		'karma.definition': "Definition Karma",
		'karma.comment': "Comment Karma",
		'submission': "Submission Stats",
		'votes': "Voting Stats",
		'votes.up': "Up votes",
		'votes.down': "Down votes",
		'votes.total': "Total votes",
	},
	'user': {
		'title': "Users",
		'login': "Sign In",
		'logout': "Sign Out",
		'signup': "Sign Up",
		'profile': "User Profile",
		'view': "View Profile",
		'edit': "Edit Profile",
		'account': "Your Account",
		'account.new': "New Account",
		'name': "Full Name",
		'email': "Email",
		'jobtitle': "Job Title",
		'organization': "Organization",
		'phone': "Phone (Commercial)",
		'password': "Password",
		'password.confirm': "Password (Confirm)"
		
	},
	'entry': {
		'new': "Add Term",
		'random.view': "View Random Term",
		'title': "Terms",
		'term': "Term",
		'found': "Terms Found"
	},
	'definition': {
		'add': "Add Definition",
		'title': "Definitions"
	},
	'language': {
		'flexicon': "Flexicon Language",
		'preferred': "Content Language",
		'title': "Language"
	},
	'artifact': {
		'title': "Artifact",
		'add': "Add Artifact",
		'index': "Usage examples",
		'source': "Source",
		'usage': "Usage",
		'notes': "Notes",
		'classification': "Classification",
		'translation': "Proposed Usage Translation"
	},
	'comment': {
		'section': "Comments & Discussion",
		'add': "Add a Comment",
		'requirement': "Please sign in or sign up to add a comment",
		'new': "New comment from "
	}
};
if (Em.LOCALE === "en-US") {
	Em.I18n.translations = FlexiconEmber.EN_US;
}