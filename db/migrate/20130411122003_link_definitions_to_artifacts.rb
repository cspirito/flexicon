# Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
class LinkDefinitionsToArtifacts < ActiveRecord::Migration
  def up
    # Link artifacts to a definitions
    add_column :artifacts, :definition_id, :integer
  end
  
  def down
    remove_column :artifacts, :definition_id
  end
end
