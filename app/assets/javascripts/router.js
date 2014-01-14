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
FlexiconEmber.Router.map(function() {
	this.route('feedback');
	this.resource('entries', function() {
		this.route('new');
		this.route('show', { path: ':entry_id'});
		this.route('search');
		this.route('random');
	});
	this.resource('definitions', function() {
		this.route('new');
		this.resource('definition', { path: ':definition_id'}, function() {
			this.route('show');
			this.resource('artifacts', function() {
				this.route('new');
				this.route('show', { path: ':artifact_id'});
			});
		});
		
	});
	this.resource('comments', function() {
		this.route('new');
		this.route('show', { path: ':comment_id'});
	});
	this.resource('users', function() {
		this.route('new');
		this.route('show', { path: ':user_id'});
		this.route('edit', { path: ':user_id/edit'});
	});
});
