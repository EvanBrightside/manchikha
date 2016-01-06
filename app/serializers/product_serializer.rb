class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :thumbnail_url

  def thumbnail_url
    object.asset.try(:url)
  end
end
