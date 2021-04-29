class CoordsController < ApplicationController
  def index
    puts params
    @coord = params['x'] + ',' + params['y']
    @data = Coordinate.includes(:character).where('location = ? AND
                                                    level = ?', @coord, params[:level])

    @data = @data ? @data.character.name : nil

    respond_to do |format|
      format.json {render :json => @data}
    end
  end
end
