FROM ruby:2.1.8

RUN gem install bundler

ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES 1

ADD Gemfile /rails/flexicon/Gemfile
ADD Gemfile.lock /rails/flexicon/Gemfile.lock

WORKDIR /rails/flexicon

RUN bundle install --without development test

ADD . /rails/flexicon

RUN chmod 755 /rails/flexicon/rails-entrypoint.sh

EXPOSE 3000
