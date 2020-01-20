class FleursController < ApplicationController
	def new
    @order = Order.new
    @flowers = Flower.all
  end

  def create
    raise
  end
end
