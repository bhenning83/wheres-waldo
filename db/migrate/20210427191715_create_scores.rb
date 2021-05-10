class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.text :location
      t.text :player
      t.integer :level
      t.integer :ms

      t.timestamps
    end
  end
end
