# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class RegistrationsController < Devise::RegistrationsController
  def create
    params[:user] = params[:user].except!("downvote_count", "upvote_count","comment_score", "definition_score", "entry_count", "definition_count", "artifact_count", "comment_count", "comment_votes", "definition_votes")
    super
  end
end
