class ChangeTimeName < ActiveRecord::Migration[6.1]
  def up
    add_column :scores, :ms, :integer
  end

  def down
    remove_column :scores, :time
  end
end
