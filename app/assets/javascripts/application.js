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
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require handlebars
//= require ember
//= require ember-data
//= require ember-auth
//= require_self
//= require flexicon_ember
//= require_tree .
//
//Ember.LOG_BINDINGS = true;
FlexiconEmber = Ember.Application.create({
	//LOG_TRANSITIONS: true
});
FlexiconEmber.Auth = Ember.Auth.create({
    signInEndPoint: '/users/sign_in',
    signOutEndPoint: '/users/sign_out',
    tokenKey: 'auth_token',
    tokenIdKey: 'user_id',
    userModel: 'FlexiconEmber.User',
	modules: ['urlAuthenticatable', 'rememberable', 'emberData'],
	urlAuthenticatable: {
    	paramsKey: 'auth'
	},
	rememberable: {
		tokenKey: 'remember_token',
	    period: 7,
	    autoRecall: true
	}
});
function loadLocale() {
	var ret = "en-US";
    var cookies = {};           // The object we will return
    var all = document.cookie;  // Get all cookies in one big string
    if (all !== "") {
		var list = all.split("; ");
		for(var i = 0; i < list.length; i++) {  // For each cookie
			var cookie = list[i].split("=");
			var name = $.trim(cookie[0]);
			var val = $.trim(cookie[1]);
			if (name === "EmberLocale") {
				ret = val;
			}
		}
	}
	Em.LOCALE = ret;
}
loadLocale();
Ember.set(FlexiconEmber, "error", []);
Ember.set(FlexiconEmber, "selectedLanguage", null);
Ember.set(FlexiconEmber, "activeLanguages", null);
Ember.set(FlexiconEmber, "locales", [
	Ember.Object.create({name: "English (US)", id: 1, locale: "en-US"}),
	Ember.Object.create({name: "Japanese", id: 2, locale: "ja"}),
	Ember.Object.create({name: "Swedish", id: 3, locale: "sv"})
]);
//FlexiconEmber.Locales = 
FlexiconEmber.HandleErrors = function(errs) {
	ret = [];
	if (errs && !errs.errors) { // either an errors object, or a string LITERAL
		ret.push(errs);
	} else {
		for (it in errs.errors) {
			ret.push(errs.errors[it]);
		}
	}
	FlexiconEmber.set('error', ret);
	$('#myModal').modal('show');
}