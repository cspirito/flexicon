# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class CommentsController < ApplicationController

  respond_to :json
  
  before_filter :load_entry
  before_filter :auth_only!,
                :only => [:new, :edit, :thumbs_up, :thumbs_down]
	
  def index
    if params[:ids]
      ret = @comments.find(params[:ids])
      else
      ret = @comments
    end
    respond_with ret
  end

  def new
    @comment = @comments.build
  end

  def create
    @comment = @comments.build(params[:comment].slice(*Comment.column_names))
    @comment.save
    respond_with @comment
  end

  def show
    @comment = @comments.find(params[:id])
    render :json => @comment
  end

  def thumbs_up
    @comment = @comments.find(params[:id])
    
    user = User.find_by_authentication_token(params[:auth_token])
    voted_for = user.voted_for? @comment
    user.vote_exclusively_for(@comment)
    
    respond_to do |format|
      response = {}
      
      response["already_voted"] = voted_for
      response["comment"] = @comment
      
      format.json {render :json => response}
    end
  end


  def thumbs_down
    @comment = @comments.find(params[:id])
    
    user = User.find_by_authentication_token(params[:auth_token])
    voted_against = user.voted_against? @comment
    user.vote_exclusively_against(@comment)
    
    respond_to do |format|
      response = {}
      response["already_voted"] = voted_against
      response["comment"] = @comment
      
      format.json {render :json => response}
    end
  end


  def load_entry
    @entry = Entry.find(params[:entry_id]) if params[:entry_id]
    @comments = @entry ? @entry.comments : Comment.scoped
  end

end
