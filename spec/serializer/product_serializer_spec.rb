require 'rails_helper'

RSpec.describe ProductSerializer, type: :serializer do
  describe '#as_json' do
    let(:product) { create(:product) }
    let(:json) do
      {
        id: product.id,
        name: product.name,
        thumbnail_url: nil
      }
    end

    let(:instance) { ProductSerializer.new(product) }
    subject { instance.as_json }

    it { is_expected.to eq(json) }

    describe ':thumbnail_url' do
      subject { instance.as_json[:thumbnail_url] }

      context 'when product has asset' do
        let(:product) { create(:product, :product_with_image) }

        it { is_expected.to eq(product.asset.url) }
      end

      context 'when product does not have asset' do
        it { is_expected.to be_nil }
      end
    end
  end
end
