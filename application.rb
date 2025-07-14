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
    unless File.exist?(File.join(settings.views, "#{lang}.md"))
      LOG.error "Language file not found: #{lang}.md"
      halt 404, 'Not Found'
    end
    content_type 'text/markdown'
    File.read(File.join(settings.views, "#{lang}.md"))
  end

  get '/:lang?' do
    lang = params['lang'] || 'pt-BR'
    unless File.exist?(File.join(settings.views, "#{lang}.md"))
      LOG.error "Language file not found: #{lang}.md"
      halt 404, 'Not Found'
    end

    # Check if request is from a bot based on User-Agent
    user_agent = request.user_agent || ''
    is_bot = user_agent.match?(/bot|crawl|spider|scrape|curl|wget|python|java|ruby|go|rust|php|node|axios|fetch|postman/i)

    if is_bot
      # Serve raw markdown for bots
      content_type 'text/markdown'
      File.read(File.join(settings.views, "#{lang}.md"))
    else
      # Serve HTML for browsers
      @markdown_content = File.read(File.join(settings.views, "#{lang}.md"))
      @html_content = Kramdown::Document.new(@markdown_content).to_html
      erb :"layouts/#{lang}"
    end
  end
end
