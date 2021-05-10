class AddLocToScores < ActiveRecord::Migration[6.1]
  def up
    add_column :scores, :location, :string
    add_column :scores, :player, :string
  end
end
