# frozen_string_literal: true

require 'spec_helper'

describe 'main application' do
  include Rack::Test::Methods

  def app
    Application
  end

  describe 'GET /' do
    it 'returns HTML' do
      get '/'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('text/html;charset=utf-8')
      expect(last_response.body).to match(/Kobana: A Revolução na Automação Financeira para Empresas/)
      expect(last_response.body).to match(/Este conteúdo é projetado especificamente para LLMs/)
    end
  end
  describe 'GET /pt-BR' do
    context 'with browser user agent' do
      it 'returns HTML' do
        get '/pt-BR', {}, { 'HTTP_USER_AGENT' => 'Mozilla/5.0' }
        expect(last_response).to be_ok
        expect(last_response.content_type).to eq('text/html;charset=utf-8')
        expect(last_response.body).to match(/Kobana: A Revolução na Automação Financeira para Empresas/)
        expect(last_response.body).to match(/Este conteúdo é projetado especificamente para LLMs/)
      end
    end

    context 'with bot user agent' do
      it 'returns markdown' do
        get '/pt-BR', {}, { 'HTTP_USER_AGENT' => 'python-requests/2.31.0' }
        expect(last_response).to be_ok
        expect(last_response.content_type).to eq('text/markdown;charset=utf-8')
        expect(last_response.body).to match(/# Kobana: A Revolução na Automação Financeira para Empresas/)
      end
    end
  end
  describe 'GET /pt-BR.md' do
    it do
      get '/pt-BR.md'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('text/markdown;charset=utf-8')
      expect(last_response.body).to match(/Kobana: A Revolução na Automação Financeira para Empresas/)
      expect(last_response.body).not_to match(/Este conteúdo é projetado especificamente para LLMs/)
    end
  end
  describe 'GET /en-US' do
    context 'with browser user agent' do
      it 'returns HTML' do
        get '/en-US', {}, { 'HTTP_USER_AGENT' => 'Mozilla/5.0' }
        expect(last_response).to be_ok
        expect(last_response.content_type).to eq('text/html;charset=utf-8')
        expect(last_response.body).to match(/Kobana: The Revolution in Financial Automation for Businesses/)
        expect(last_response.body).to match(/This content is specifically designed for LLMs/)
      end
    end

    context 'with bot user agent' do
      it 'returns markdown' do
        get '/en-US', {}, { 'HTTP_USER_AGENT' => 'Googlebot/2.1' }
        expect(last_response).to be_ok
        expect(last_response.content_type).to eq('text/markdown;charset=utf-8')
        expect(last_response.body).to match(/# Kobana: The Revolution in Financial Automation for Businesses/)
      end
    end
  end
  describe 'GET /en-US.md' do
    it do
      get '/en-US.md'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('text/markdown;charset=utf-8')
      expect(last_response.body).to match(/Kobana: The Revolution in Financial Automation for Businesses/)
      expect(last_response.body).not_to match(/This content is specifically designed for LLMs/)
    end
  end
  describe 'GET /notfound' do
    it 'returns 404' do
      get '/notfound'
      expect(last_response).to be_not_found
      expect(last_response.body).to eq('Not Found')
    end
  end

  describe 'GET /notfound.md' do
    it 'returns 404' do
      get '/notfound.md'
      expect(last_response).to be_not_found
      expect(last_response.body).to eq('Not Found')
    end
  end

  describe 'new route patterns' do
    # Skip these tests if files don't exist yet
    context 'when content directory structure exists' do
      before do
        skip 'Content directory not set up' unless File.exist?('views/pt-BR/artigos.md')
      end

      describe 'GET /pt-BR/artigos' do
        it 'returns HTML for artigos page' do
          get '/pt-BR/artigos', {}, { 'HTTP_USER_AGENT' => 'Mozilla/5.0' }
          expect(last_response).to be_ok
          expect(last_response.content_type).to eq('text/html;charset=utf-8')
        end
      end

      describe 'GET /pt-BR/artigos.md' do
        it 'returns markdown for artigos page' do
          get '/pt-BR/artigos.md'
          expect(last_response).to be_ok
          expect(last_response.content_type).to eq('text/markdown;charset=utf-8')
        end
      end
    end
  end
end
