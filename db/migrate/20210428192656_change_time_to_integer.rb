class ChangeTimeToInteger < ActiveRecord::Migration[6.1]
  def up
    change_column :scores, :time, :integer
  end

  def down
    change_column :scores, :time, :time
  end
end
