class ScoresController < ApplicationController

  def index
    puts params
    puts params[:player]
    new_player = Player.new(name: params[:player], location: params[:loc])
    
    if new_player.save
      score = Score.new(player: new_player, time: params[:timer])
      if score.save
        puts 'yay'
        scores = Score.includes(:player.name).all
        respond_to do |format|
          format.json {render :json => {scores: scores, player: new_player}}
        end
      end
    end
  end

end
