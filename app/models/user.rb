# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class User < ActiveRecord::Base

  before_save :ensure_authentication_token

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
        #  :token_authenticatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me,
    :name, :phone, :secure_phone, :organization, :job_title

  has_many :entries
  has_many :artifacts
  has_many :comments
  has_many :definitions

  # Validation
  validates_presence_of :name

  # Voting with thumbs_up
  acts_as_voter

  def entry_count
    entries.count
  end

  def definition_count
    definitions.count
  end

  def artifact_count
    artifacts.count
  end

  def comment_count
    comments.count
  end

  # Calculate the definition score for user
  def definition_score
    score_for_type("Definition")
  end

  def comment_score
    score_for_type("Comment")
  end

  def definition_votes
    votes_for_type("Definition").count
  end

  def comment_votes
    votes_for_type("Comment").count
  end

  def upvote_count
    count_votes_of_value(true)
  end

  def downvote_count
    count_votes_of_value(false)
  end

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.where(authentication_token: token).first
    end
  end

  private
  def score_for_type(commentable_type)
    votes = votes_for_type(commentable_type)

    if votes && !votes.empty?
      ct = 0
      total = 0
      votes.each do |vote|
        ct += 1
        if vote.vote
          total += 1
        end
      end
    end

    # Return the score
    if not ct.nil?
      ((total.to_f / ct ) * 5).round(1)
    else
      0
    end
  end

  private
  def votes_for_type(commentable_type)
    if commentable_type == "Comment"
      ids = Comment.where("user_id = ?", id)
    elsif commentable_type == "Definition"
      ids = Definition.where("user_id = ?", id)
    end

    votes = Vote.where("voteable_type = '#{commentable_type}' and voteable_id in (?)", ids)
  end

  private
  def count_votes_of_value(val)
    Vote.where("voter_id = ? and vote = ?", id, val).count
  end
end
