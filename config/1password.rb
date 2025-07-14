# frozen_string_literal: true

class << ENV
  alias original_fetch fetch

  def fetch(key, *)
    value = original_fetch(key, *)
    ENV[key] = value.to_s.include?('op://') ? `op read "#{value}"`.strip : value.to_s
  end
end
