# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
# Adaoted from code at
# https://github.com/heartsentwined/ember-auth-rails-demo/wiki/Devise
class SessionsController < Devise::SessionsController
  def create

    unless (params[:email] && params[:password]) || params[:remember_token]
      return missing_params
    end

    build_resource

    resource = if params[:remember_token]
      resource_from_remember_token
    else
      resource_from_credentials
    end

    return invalid_credentials unless resource

    resource.ensure_authentication_token!


    data = {
      :user_id => resource.id,
      :auth_token => resource.authentication_token
    }

    if params[:remember]
      resource.remember_me!
      data[:remember_token] = remember_token(resource)
    end

    render :json => data, :status => 201
  end

  def destroy

    return missing_params unless params[:auth_token]
    
    resource = resource_class.find_by_authentication_token(params[:auth_token])

    resource.reset_authentication_token!
    render :json => {:user_id => resource.id}, :status => 200
  end

  protected

  def resource_from_credentials
    data = {:email => params[:email]}
    if res = resource_class.find_for_database_authentication(data)
      if res.valid_password?(params[:password])
        res
      end
    end
  end

  def resource_from_remember_token

    puts "WE HAVE TOKEN"

    token = params[:remember_token]
    id, identifier = token.split("-")

    resource_class.serialize_from_cookie(id, identifier)
  end

  def remember_token(resource)
    data = resource_class.serialize_into_cookie(resource)
    "#{data.first.first}-#{data.last}"
  end



  # Need to give status codes, rather than a redirect.
  def missing_params
    warden.custom_failure!
    return render :json => {}, :status => 400
  end

  def invalid_credentials
    warden.custom_failure!
    return render :json => {}, :status => 401
  end

  # Build a devise resource passing in the session. Useful to move
  # temporary session data to the newly created user.
  def build_resource(hash=nil)
    self.resource = resource_class.new_with_session(hash || {}, session)
  end
end
