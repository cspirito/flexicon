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
FlexiconEmber.User = DS.Model.extend({
	// Fields
	email: DS.attr('string'),
	name: DS.attr('string'),
	phone: DS.attr('string'),
	securePhone: DS.attr('string'),
	organization: DS.attr('string'),
	jobTitle: DS.attr('string'),
	password: DS.attr('string'),
	entry_count: DS.attr('number'),
	definition_count: DS.attr('number'),
	artifact_count: DS.attr('number'),
	comment_count: DS.attr('number'),
	downvote_count: DS.attr('number'),
	upvote_count: DS.attr('number'),
	definition_score: DS.attr('number'),
	comment_score: DS.attr('number'),
	definition_votes: DS.attr('number'),
	comment_votes: DS.attr('number'),
	// Relationships
	entries: DS.hasMany('FlexiconEmber.Entry'),
	definitions: DS.hasMany('FlexiconEmber.Definition'),
	artifacts: DS.hasMany('FlexiconEmber.Artifact'),
	// Computed Properties
    isCurrentUser: function() {
		return FlexiconEmber.Auth.get('signedIn') && this.get('email') == FlexiconEmber.Auth.get('user').get('email');
    }.property('email'),
	total_vote_count: function() {
		return this.get('upvote_count') + this.get('downvote_count');
	}.property('upvote_count', 'downvote_count')
});