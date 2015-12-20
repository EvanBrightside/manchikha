require 'rails_helper'

RSpec.describe Product, type: :model do
  let(:product) { create(:product, category: category) }
  let(:category) { create(:category) }

  it 'should have relations' do
    expect(product.category).to eq(category)
  end
end
