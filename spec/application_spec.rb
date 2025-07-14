# frozen_string_literal: true

require 'spec_helper'

describe 'main application' do
  include Rack::Test::Methods

  def app
    Application
  end

  describe 'GET /' do
    it 'should be ok' do
      get '/'
      expect(last_response).to be_ok
      expect(last_response.body).to match(/Kobana - Conteúdo Completo do Website/)
      expect(last_response.body).to match(/ Este conteúdo é projetado especificamente para LLMs/)
    end
  end
  describe 'GET /pt-BR' do
    it 'should be ok' do
      get '/pt-BR'
      expect(last_response).to be_ok
      expect(last_response.body).to match(/Kobana - Conteúdo Completo do Website/)
      expect(last_response.body).to match(/Este conteúdo é projetado especificamente para LLMs/)
    end
  end
  describe 'GET /en-US' do
    it 'should be ok' do
      get '/en-US'
      expect(last_response).to be_ok
      expect(last_response.body).to match(/Kobana - Complete Website Content/)
      expect(last_response.body).to match(/This content is specifically designed for LLMs/)
    end
  end
  describe 'GET /en-US' do
    it 'should be ok' do
      get '/de'
      expect(last_response).to be_not_found
      expect(last_response.body).to eq('Not Found')
    end
  end
end
