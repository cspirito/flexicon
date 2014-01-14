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
FlexiconEmber.Language = DS.Model.extend({
  language: DS.attr('string'),
  englishTranslation: DS.attr('string'),
  abbreviation: DS.attr('string'),
  entries: DS.hasMany('FlexiconEmber.Entry'),
  fullName: function() {
	  return this.get('englishTranslation') + ' (' + this.get('language') + ')';
  }.property('language', 'englishTranslation')
}); 