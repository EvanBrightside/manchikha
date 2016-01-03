require 'rails_helper'

RSpec.describe ProductSerializer, type: :serializer do
  let(:product) { create(:product) }
  let(:json) do
    {
      id: product.id,
      name: product.name
    }
  end

  subject { ProductSerializer.new(product).as_json }

  it { is_expected.to eq(json) }
end
