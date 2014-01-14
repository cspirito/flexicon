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
FlexiconEmber.Definition = DS.Model.extend({
  entry: DS.belongsTo('FlexiconEmber.Entry'),
  user: DS.belongsTo('FlexiconEmber.User'),
  artifacts: DS.hasMany('FlexiconEmber.Artifact'),
  text: DS.attr('string'),
  created_at: DS.attr('date'),
  votes_for: DS.attr('number'),
  votes_against: DS.attr('number')
});