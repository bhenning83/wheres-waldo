class AddLevelToScores < ActiveRecord::Migration[6.1]
  def up
    add_column :scores, :level, :integer
  end
end
