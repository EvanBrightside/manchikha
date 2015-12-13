class Product < ActiveRecord::Base
  belongs_to :category

  validates :name, :category, presence: true
end
