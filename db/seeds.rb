# NOTICE

# This software was produced for the U. S. Government
# under Contract No. FA8702-13-C-0001, and is
# subject to the Rights in Noncommercial Computer Software
# and Noncommercial Computer Software Documentation Clause (DFARS) 252.227-7014 (JUN 1995)

#  2013 The MITRE Corporation. All Rights Reserved.
# db/seeds.rb
# Copyright (c) 2013, The MITRE Corporation. All Rights Reserved
require 'date'

# Create some users
u = User.create(
  :email => "admin@flexicon.org",
  :name => "Administrator",
  :password => "administrator",
  :password_confirmation => "administrator"
)

File.open("db/languages.txt") do |file_handle|
    
  # Skip headers
  for i in 1..8
    file_handle.readline
  end
  file_handle.each_line do |line|
    tokens = line.chomp.split("\t")

    Language.create(
      :abbreviation => tokens[2],
      :language => tokens[1],
      :english_translation => tokens[0]
    )
  end
end


File.open("db/russian_terms_anthony.txt") do |file_handle|
    
  # Skip headers
  for i in 1..8
    file_handle.readline
  end
  file_handle.each_line do |line|
    tokens = line.chomp.split("\t")

    # Russian terms
    russian_terms = tokens[2...7]
    russian_terms = russian_terms.select {|x| !x.blank? }

    russian_terms.uniq.each do |russian_term_string|
    russian_term = Entry.new

    russian_term.term = russian_term_string
    russian_term.language = Language.find_by_abbreviation("ru")


    definition = Definition.new(
      :text => tokens[1]
    )
    definition.user = User.first


    artifact = Artifact.new(
      :source => "Spreadsheet",
      :classification => "Unclassified",
      :notes => "Publicly released",
      :usage => tokens[9],
      :proposed_usage_translation => tokens[8]
    )

    artifact.user = User.first

    definition.artifacts << artifact

    russian_term.definitions << definition
    russian_term.user = User.first
    russian_term.save
  end
end
end
