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
#
# Indexes
#
#  index_products_on_category_id  (category_id)
#
# Foreign Keys
#
#  fk_rails_fb915499a4  (category_id => categories.id)
#

class Product < ActiveRecord::Base
  belongs_to :category

  validates :name, :category, presence: true
end
