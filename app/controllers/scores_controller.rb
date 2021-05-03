class ScoresController < ApplicationController

  def index
    score = Score.new(score_params)
    if score.save
      scores = Score.all.where('level = ?', params[:level]).order(:time)
      rank = scores.count{|x| x[:time] < score[:time]}
      respond_to do |format|
        format.json {render :json => {highScores: scores.limit(5), player: params[:player], rank: rank}}
      end
    end
  end

  private
  def score_params
    params.permit(:player, :time, :location, :level)
  end

end
