# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class Comment < ActiveRecord::Base
  attr_accessible :comment, :entry_id, :user_id, :created_at

  belongs_to :user
  belongs_to :entry
  
  validates :comment, :presence => true
  
  acts_as_voteable
  
end
