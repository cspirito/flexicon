# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class UsersController < ApplicationController

  respond_to :json

  def index
    respond_with User.all
  end

  def show
    @user = User.find(params[:id])
    respond_with @user
  end
  
  def update
    user = User.find(params[:id])
    user.update_attributes(params[:user].slice(*User.column_names))
    respond_with user
  end
  
  def create
    user = User.new
    user.update_attributes(params[:user].slice(*User.column_names))
    user.save
    respond_with user
  end
  
  def feedbackSubmit
    FeedbackMailer.feedback(User.find(params[:user_id]), params[:info], "Flexicon").deliver
  
    msg = "Sent"
  
    render :json => msg
  end
end
