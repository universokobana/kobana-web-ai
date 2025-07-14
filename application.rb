# frozen_string_literal: true

require 'rubygems'
require 'bundler/setup'
require 'logger'
require 'kramdown'
require 'sinatra'

class Application < Sinatra::Base
  set :views, File.expand_path('views', __dir__)
  set :public_folder, File.expand_path('public', __dir__)

  LOG = Logger.new($stdout)
  LOG.level = Logger.const_get ENV['LOG_LEVEL'] || 'DEBUG'

  get '/:lang.md' do
    lang = params['lang'] || 'pt-BR'
    if !File.exist?(File.join(settings.views, "#{lang}.md"))
      LOG.error "Language file not found: #{lang}.md"
      halt 404, "Not Found"
    end
    content_type 'text/markdown'
    File.read(File.join(settings.views, "#{lang}.md"))
  end

  get '/:lang?' do
    lang = params['lang'] || 'pt-BR'
    if !File.exist?(File.join(settings.views, "#{lang}.md"))
      LOG.error "Language file not found: #{lang}.md"
      halt 404, "Not Found"
    end
    @markdown_content = File.read(File.join(settings.views, "#{lang}.md"))
    @html_content = Kramdown::Document.new(@markdown_content).to_html
    erb :"layouts/#{lang}"
  end
end
