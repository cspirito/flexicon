# Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
class AddDeviseTokenToUsers < ActiveRecord::Migration
  def change
    change_table(:users) do |t|
      t.string :authentication_token

      add_index :users, :authentication_token, :unique => true
    end
  end
end
