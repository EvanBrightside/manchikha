module ResponseHelper
  def response_body
    ActiveSupport::JSON.decode(response.body)
  end
end

RSpec.configuration.include ResponseHelper, type: :controller
