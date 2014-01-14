# Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :term
      t.integer :user_id
      t.integer :language_id

      t.timestamps
    end
  end
end
