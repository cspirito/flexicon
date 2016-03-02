# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
class ApplicationController < ActionController::Base

  before_filter :authenticate_user_from_token!
  # before_filter :authenticate_user!

  # include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery

  # before_filter :default_json
  # inherit_resources
  respond_to :json


  private

 # For this example, we are simply using token authentication
 # via parameters. However, anyone could use Rails's token
 # authentication features to get the token from a header.
 def authenticate_user_from_token!
   user_token = params[:user_token].presence
   user       = user_token && User.find_by_authentication_token(user_token.to_s)

   if user
     # Notice we are passing store false, so the user is not
     # actually stored in the session and a token is needed
     # for every request. If you want the token to work as a
     # sign in token, you can simply remove store: false.
     sign_in user, store: false
   end
 end

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
