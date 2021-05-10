class AddLocToScores < ActiveRecord::Migration[6.1]
  def up
    add_column :scores, :location, :text
    add_column :scores, :player, :text
  end
end
