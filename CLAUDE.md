# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Instructions

After editing a file runs rubocop -a over the file.

## Commands

### Development
- **Run development server**: `./bin/dev` - Starts Puma with auto-reloading via rerun
- **Install dependencies**: `bundle install`
- **Update API documentation**: `./bin/update-api-docs` - Generates API docs from Swagger spec

### Testing
- **Run all tests**: `bundle exec rake spec` or `rake spec`
- **Run specific test**: `bundle exec rspec spec/path/to/test_spec.rb`
- **Run tests matching pattern**: `bundle exec rspec spec -e "pattern"`

### Code Quality
- **Run RuboCop linter**: `bundle exec rubocop`
- **Auto-fix linting issues**: `bundle exec rubocop -a`

## Architecture Overview

This is a Ruby Sinatra application that serves Kobana's documentation optimized for LLMs. The key architectural decisions:

### Content Negotiation
The application intelligently serves different formats based on the client:
- **Browsers** (detected via User-Agent): Receive HTML with full styling
- **Bots/LLMs/CLI tools**: Receive clean Markdown for optimal parsing

### Routing Strategy
Routes follow this pattern with fallback logic:
1. `/:locale/:page.:format` (e.g., /pt-BR/integrações.md)
2. `/:locale/:page` (e.g., /en-US/integrations)
3. `/:page.:format` (e.g., /api.md)
4. `/:page` (e.g., /pricing)

The application automatically:
- Detects locale from URL or defaults to pt-BR
- Normalizes page names (removes accents, handles special characters)
- Falls back to pt-BR content if locale-specific content is missing

### Key Components

**application.rb**: Main Sinatra application class containing:
- Route definitions with complex matching patterns
- Content negotiation logic based on User-Agent
- Locale detection and fallback mechanisms
- Page normalization for multi-language support

**bin/update-api-docs**: Script that:
- Reads OpenAPI/Swagger spec from `content/kobana_swagger.json`
- Generates documentation using `readme` gem
- Outputs to `content/api/` directory in ReadMe format

**views/**: Template structure supporting multiple languages:
- Layouts in `views/layouts/[locale]/` (ERB templates)
- Content in `views/[locale]/` (Markdown files)
- API documentation integrated via `views/pt-BR/api.md`

### Multi-language Support
- Primary language: Portuguese (pt-BR)
- Secondary language: English (en-US)
- Content fallback: Always falls back to pt-BR if translation missing
- URL slugs are normalized across languages (e.g., "integrações" → "integracoes")

### API Documentation
The application now includes API documentation functionality:
- Source: OpenAPI/Swagger specification in `content/kobana_swagger.json`
- Generated docs stored in `content/api/` directory
- Served through the standard routing system at `/api` or `/api.md`