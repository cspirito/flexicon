# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class EntrySerializer < ActiveModel::Serializer
  attributes :id, :term, :user_id, :language_id
  
  # Embed the ids instead of sideloading for now.
  has_many :definitions, :embed => :ids, :key => "definition_ids"
  has_many :comments, :embed => :ids, :key => "comment_ids"
end
