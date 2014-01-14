# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class LanguagesController < ApplicationController

  def index
    if params[:type]
      @languages = Language.order("english_translation asc").find(Entry.pluck(:language_id))
    else
      @languages = Language.order("english_translation asc").all
    end
    
    respond_to do |format|
      format.json {render :json => @languages}
    end
  end
  
  def create
  end
  
  def show
    @language = Language.find(params[:id])
    
    respond_to do |format|
      format.json {render :json => @language}
    end
  end
  
  def edit
  end
end
