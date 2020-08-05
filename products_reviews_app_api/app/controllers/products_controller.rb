class ProductsController < ApplicationController

  # GET /products
  def index
    @products = Product.all

    render json: @products, status: 200 
  end

  # GET /products/1
  def show
    render json: @product
  end
end
