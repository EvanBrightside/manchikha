# encoding: utf-8
class Category < ActiveRecord::Base
  has_many :products

  validates :name, presence: true
end
