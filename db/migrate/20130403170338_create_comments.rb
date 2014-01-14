# Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :entry_id
      t.integer :user_id
      t.text :comment

      t.timestamps
    end
  end
end
