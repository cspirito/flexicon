#!/bin/bash
set -e

exec rake assets:precompile &
exec rake db:create &
exec rake db:reset &
exec rake db:seed &
exec rails s -b 0.0.0.0

exec "$@"
