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
FlexiconEmber.Artifact = DS.Model.extend({
  source: DS.attr('string'),
  classification: DS.attr('string'),
  notes: DS.attr('string'),
  usage: DS.attr('string'),
  proposedUsageTranslation: DS.attr('string'),
  created_at: DS.attr('date'),
  definition: DS.belongsTo('FlexiconEmber.Definition'),
  user: DS.belongsTo('FlexiconEmber.User')
});