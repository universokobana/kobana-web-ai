# frozen_string_literal: true

require 'spec_helper'

describe 'main application' do
  include Rack::Test::Methods

  def app
    Application
  end

  describe 'GET /' do
    it do
      get '/'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('text/html;charset=utf-8')
      expect(last_response.body).to match(/Kobana - Conteúdo Completo do Website/)
      expect(last_response.body).to match(/ Este conteúdo é projetado especificamente para LLMs/)
    end
  end
  describe 'GET /pt-BR' do
    it do
      get '/pt-BR'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('text/html;charset=utf-8')
      expect(last_response.body).to match(/Kobana - Conteúdo Completo do Website/)
      expect(last_response.body).to match(/Este conteúdo é projetado especificamente para LLMs/)
    end
  end
  describe 'GET /pt-BR.md' do
    it do
      get '/pt-BR.md'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('text/markdown;charset=utf-8')
      expect(last_response.body).to match(/Kobana - Conteúdo Completo do Website/)
      expect(last_response.body).not_to match(/Este conteúdo é projetado especificamente para LLMs/)
    end
  end
  describe 'GET /en-US' do
    it do
      get '/en-US'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('text/html;charset=utf-8')
      expect(last_response.body).to match(/Kobana - Complete Website Content/)
      expect(last_response.body).to match(/This content is specifically designed for LLMs/)
    end
  end
  describe 'GET /en-US.md' do
    it do
      get '/en-US.md'
      expect(last_response).to be_ok
      expect(last_response.content_type).to eq('text/markdown;charset=utf-8')
      expect(last_response.body).to match(/Kobana - Complete Website Content/)
      expect(last_response.body).not_to match(/This content is specifically designed for LLMs/)
    end
  end
  describe 'GET /notfound' do
    it do
      get '/notfound'
      expect(last_response).to be_not_found
      expect(last_response.content_type).to eq('text/html;charset=utf-8')
      expect(last_response.body).to eq('Not Found')
    end
  end
  describe 'GET /notfound.md' do
    it do
      get '/notfound.md'
      expect(last_response).to be_not_found
      expect(last_response.content_type).to eq('text/html;charset=utf-8')
      expect(last_response.body).to eq('Not Found')
    end
  end
end
