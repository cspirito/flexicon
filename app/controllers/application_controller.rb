# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class ApplicationController < ActionController::Base
  # include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery

  # before_filter :default_json
  # inherit_resources
  respond_to :json


  protected

  def default_json
    request.format = :json  if params[:format].nil?
  end

  def auth_only!

    unless user_signed_in?
      render :json => {}, :status => 401
    end
  end

end
