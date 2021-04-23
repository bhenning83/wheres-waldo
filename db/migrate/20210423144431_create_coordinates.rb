class CreateCoordinates < ActiveRecord::Migration[6.1]
  def change
    create_table :coordinates do |t|
      t.belongs_to :character
      t.string :location

      t.timestamps
    end
  end
end
