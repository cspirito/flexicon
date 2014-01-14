# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class DefinitionsController < ApplicationController

  respond_to :json

  before_filter :load_entry
  before_filter :auth_only!,
    :only => [:new, :edit, :update, :destroy, :thumbs_up, :thumbs_down]

  def index
    if params[:ids]
      ret = @definitions.find(params[:ids])
      else
      ret = @definitions
    end
    respond_with ret
  end

  def new
    @definition = @definitions.build
    respond_with @definition
  end

  def create
    @definition = @definitions.build(params[:definition].slice(*Definition.column_names))
    @definition.save
    respond_with @definition
  end

  def show
    @definition = @definitions.find(params[:id])
    respond_with @definition
  end

  def edit
  end

  def destroy
  end
  
  def thumbs_up
    @definition = Definition.find(params[:id])
    
    user = User.find_by_authentication_token(params[:auth_token])
    voted_for = user.voted_for? @definition
    user.vote_exclusively_for(@definition)
    
    respond_to do |format|
      response = {}
      response["already_voted"] = voted_for
      response["definitions"] = @definition
      
      format.json {render :json => response }
    end
  end
  
  def thumbs_down
    @definition = Definition.find(params[:id])
    
    user = User.find_by_authentication_token(params[:auth_token])
    voted_against = user.voted_against? @definition
    user.vote_exclusively_against @definition
    
    respond_to do |format|
      response = {}
      
      response["already_voted"] = voted_against
      response["definitions"] = @definition
      
      format.json {render :json => response}
    end
  end

  # Scoping in the case of nested routes
  def load_entry
    @entry = Entry.find(params[:entry_id]) if params[:entry_id]
    @definitions = @entry ? @entry.definitions : Definition.scoped
  end

end
