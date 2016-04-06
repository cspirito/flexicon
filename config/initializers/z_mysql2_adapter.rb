class ActiveRecord::ConnectionAdapters::Mysql2Adapter

  # If you are running on Heroku comment out this line
  NATIVE_DATABASE_TYPES[:primary_key] = "int(11) auto_increment PRIMARY KEY"
end
