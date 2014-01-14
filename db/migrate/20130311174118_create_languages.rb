# Copyright (c) 2013. The MITRE Corporation. All Rights Reserved
class CreateLanguages < ActiveRecord::Migration
  def change
    create_table :languages do |t|
      t.string :language
      t.string :english_translation
      t.string :abbreviation

      t.timestamps
    end
  end
end
