class CoordsController < ApplicationController
  def index
    @coord = params['x'] + ',' + params['y']
    @data = Coordinate.includes(:character).find_by(location: @coord)

    @data = @data ? @data.character.name : nil

    respond_to do |format|
      format.json {render :json => @data}
    end
  end
end
