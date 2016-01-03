module Api
  class CategoriesController < ApplicationController
    def index
      render json: Category.includes(:products).to_a
    end
  end
end
