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

class Product < ActiveRecord::Base
  belongs_to :category

  validates :name, :category, presence: true
end
