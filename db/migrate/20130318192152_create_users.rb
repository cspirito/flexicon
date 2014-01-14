# Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      
      t.string :name
      t.string :phone
      t.string :secure_phone
      t.string :organization
      t.string :job_title

      t.timestamps
    end
  end
end
