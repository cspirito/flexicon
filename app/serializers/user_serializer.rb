# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :phone, :secure_phone, :organization, :job_title, :definition_score, :comment_score, :entry_count, :definition_count, :artifact_count, :comment_count, :comment_votes, :definition_votes, :upvote_count, :downvote_count
  
  def definition_score
    object.definition_score
  end
  
  def comment_score
    object.comment_score
  end
  
  def definition_votes
    object.definition_votes
  end
  
  def comment_votes
    object.comment_votes
  end
  
  def entry_count
    object.entry_count
  end
  
  def definition_count
    object.definition_count
  end
  
  def artifact_count
    object.artifact_count
  end
  
  def comment_count
    object.comment_count
  end
    
  def upvote_count
    object.upvote_count
  end
    
  def downvote_count
    object.downvote_count
  end
end
