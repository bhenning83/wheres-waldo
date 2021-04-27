class ScoresController < ApplicationController
  def index
    @scores = Score.all

    respond_to do |format|
      format.json {render :json => @scores}
    end
  end
end
