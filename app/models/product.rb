# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  category_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#  asset_uid   :string
#
# Indexes
#
#  index_products_on_category_id  (category_id)
#

class Product < ActiveRecord::Base
  dragonfly_accessor :asset

  belongs_to :category

  validates :name, :category, presence: true
end
