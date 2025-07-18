# frozen_string_literal: true

workers Integer(ENV['WEB_CONCURRENCY'] || 2)
threads_count = Integer(ENV['THREAD_COUNT'] || 5)
threads threads_count, threads_count

rackup      'config.ru'
# port        ENV['PORT']     || 3000
environment ENV['RACK_ENV'] || 'development'
