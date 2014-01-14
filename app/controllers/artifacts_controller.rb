# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class ArtifactsController < ApplicationController
  respond_to :json
  before_filter :load_entry
  before_filter :auth_only!,
  :only => [:new, :edit, :update, :destroy, :thumbs_up, :thumbs_down]
  
  def index
    respond_to do |format|
      if params[:ids]
        format.json {render :json => @artifacts.find(params[:ids])}
      else
        format.json {render :json => @artifacts}
      end
    end
  end

  def new
    @artifact = @artifacts.build
    respond_with @artifact
  end
  
  def create
    @artifact = @artifacts.build(params[:artifact])
    
    respond_to do |format|
      if @artifact.save
        format.json {render :json => @artifact, :status => :created,
          :location => @artifact}
        else
        format.json {render :json => @artifact.errors,
          :status => :unprocessable_entity}
      end
    end
  end

  def show
    @artifact = Artifact.find(params[:id])
    respond_with @artifact
  end
  
  def edit
    
  end
  
  def destroy
    
  end

  # Scoping in the case of nested routes
  def load_entry
    @definition = Definition.find(params[:definition_id]) if params[:definition_id]
    @artifacts = @definition ? @definition.artifacts : Artifact.scoped
  end
  
end
