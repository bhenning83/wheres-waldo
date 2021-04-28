class ScoresController < ApplicationController

  def index
    score = Score.new(player: params[:player], time: params[:time])
    if score.save
      scores = Score.all.order(time: :desc)
      rank = scores.count{|x| x[:time] < score[:time]}
      respond_to do |format|
        format.json {render :json => {highScores: scores.limit(5), player: params[:player], rank: rank}}
      end
    end
  end

end
