class AddLevelToCoords < ActiveRecord::Migration[6.1]
  def up
    add_column :coordinates, :level, :integer
  end
end
