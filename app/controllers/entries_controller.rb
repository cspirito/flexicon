# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class EntriesController < ApplicationController
  respond_to :json
  before_filter :default_json
  
  def index
    if params[:ids]
      ret = Entry.find(params[:ids])
    elsif params[:language]
      ret = Entry.where(:language_id => params[:language])
    else
      ret = Entry.all
    end
    respond_with ret
  end
  
  def show
    respond_with Entry.find(params[:id])
  end
  
  def create
    ent = Entry.new(params[:entry])
    ent.save
    respond_with ent
  end
  
  def random_index
    entry = Entry.random
    respond_with entry.id
  end
  
  def search
    entries = Entry.where('term COLLATE UTF8_GENERAL_CI LIKE ?', '%' + params[:term] + '%')
    ret = entries.map {|ent| ent.term}.uniq
    respond_with ret.to_json
  end
  
  def get_id
    # entries = Entry.where(term: params[:term])
    entries_match = Entry.where('term LIKE ?', '%' + params[:term] + '%')

    # entries_def = Entry.where('definition LIKE ?', '%' + params[:term] + '%')
    entries_def = Entry.joins(:definitions).where('text LIKE ?', '%' + params[:term] + '%')

    entries = entries_def + entries_match
    
    ret = entries.map{|ent| ent.id}.uniq

    respond_with ret.to_json
  end
end
