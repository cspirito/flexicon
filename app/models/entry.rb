# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class Entry < ActiveRecord::Base
  attr_accessible :language_id, :term, :user_id, :created_at
  
  belongs_to :user
  belongs_to :language
  
  has_many :definitions
  has_many :comments
  
  validates :term, :presence => true, :uniqueness => { :scope => :language_id, :case_sensitive => false, :message => "Term must be unique within the given language" }
  
  
  def self.random
    if (c = count) != 0
      find(:first, :offset => rand(c))
    end
  end
end
