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

  def index(lang, page, format)
    # For backwards compatibility, check both new structure and old flat files
    file_path = if File.exist?(File.join(settings.views, "#{lang}/#{page}.md"))
                  File.join(settings.views, "#{lang}/#{page}.md")
                elsif File.exist?(File.join(settings.views, "#{lang}.md")) && page == 'index'
                  File.join(settings.views, "#{lang}.md")
                end

    unless file_path
      LOG.error "File not found: #{lang}/#{page}.md or #{lang}.md"
      halt 404, 'Not Found'
    end

    # Check if request is from a bot based on User-Agent
    user_agent = request.user_agent || ''
    is_bot = user_agent.match?(/bot|crawl|spider|scrape|curl|wget|python|java|ruby|go|rust|php|node|axios|fetch|postman/i)

    if is_bot || format == 'md'
      content_type 'text/markdown'
      File.read(file_path)
    else
      @markdown_content = File.read(file_path)
      @html_content = Kramdown::Document.new(@markdown_content).to_html

      # Try to find the appropriate layout
      if File.exist?(File.join(settings.views, "layouts/#{lang}/#{page}.erb"))
        erb :"layouts/#{lang}/#{page}"
      elsif File.exist?(File.join(settings.views, "layouts/#{lang}/index.erb"))
        erb :"layouts/#{lang}/index"
      elsif File.exist?(File.join(settings.views, 'layout.erb'))
        erb :layout
      else
        # Return HTML without layout if no layout found
        @html_content
      end
    end
  end

  get '/' do
    index('pt-BR', 'index', 'html')
  end

  get '/api/?' do
    index('pt-BR', 'api', 'html')
  end

  # Handle routes like:
  # /pt-BR          -> lang=pt-BR, page=index, format=html
  # /pt-BR.md       -> lang=pt-BR, page=index, format=md
  # /pt-BR/artigos  -> lang=pt-BR, page=artigos, format=html
  # /pt-BR/artigos.md -> lang=pt-BR, page=artigos, format=md
  get %r{/([^/.]+)(?:\.md)?(?:/([^/.]+)(?:\.md)?)?\/?} do |lang, page|
    # Set defaults
    lang ||= 'pt-BR'
    page ||= 'index'

    # Determine format based on request path
    format = request.path_info.end_with?('.md') ? 'md' : 'html'

    index(lang, page, format)
  end
end
