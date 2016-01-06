require 'rails_helper'

RSpec.describe Api::CategoriesController, type: :controller do
  describe '#index' do
    let(:category) { create(:category) }
    let!(:product) { create(:product, category: category) }
    let(:json) do
      {
        'id' => category.id,
        'name' => category.name,
        'products' => [{ 'id' => product.id, 'name' => product.name, 'thumbnail_url' => nil }]
      }
    end

    before { get :index }

    subject { response }

    it { is_expected.to be_success }
    it { expect(response_body).to eq([json]) }
  end
end
