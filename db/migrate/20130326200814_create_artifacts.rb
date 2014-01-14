# Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
class CreateArtifacts < ActiveRecord::Migration
  def change
    create_table :artifacts do |t|
      t.text :source
      t.text :classification
      t.text :notes
      t.integer :user_id
      t.text :usage
      t.text :proposed_usage_translation

      t.timestamps
    end
  end
end
