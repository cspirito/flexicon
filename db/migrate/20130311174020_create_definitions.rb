# Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
class CreateDefinitions < ActiveRecord::Migration
  def change
    create_table :definitions do |t|
      t.integer :entry_id
      t.integer :user_id
      t.text :text

      t.timestamps
    end
  end
end
