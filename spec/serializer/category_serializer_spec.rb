require 'rails_helper'

RSpec.describe CategorySerializer, type: :serializer do
  let(:category) { create(:category) }
  let(:json) do
    {
      id: category.id,
      name: category.name
    }
  end

  subject { CategorySerializer.new(category).as_json }

  it { is_expected.to eq(json) }
end
