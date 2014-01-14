# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
require 'test_helper'

class EntriesControllerTest < ActionController::TestCase
  
  test "should get index" do
    get :index, format => :json
    assert_response :success
  end
  
  test "should get show" do
    get :show, Post.first.id, format => :json
    assert_response :success
  end
  
end
