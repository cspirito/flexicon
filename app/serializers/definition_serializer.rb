# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class DefinitionSerializer < ActiveModel::Serializer
  attributes :id, :entry_id, :user_id, :text, :created_at, :votes_for, :votes_against
  
  has_many :artifacts, :embed => :ids, :key => "artifact_ids"
end
