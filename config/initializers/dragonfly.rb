require 'dragonfly'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret 'cf0794750422693aff29b6575be75d083a79f91289cc30ea2dd2bcc15930617e'

  url_format '/media/:job/:name'

  datastore :file,
            root_path: Rails.root.join('public/system/dragonfly', Rails.env),
            server_root: Rails.root.join('public')
end

# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
