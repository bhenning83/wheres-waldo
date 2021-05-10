class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.text :name

      t.timestamps
    end
  end
end
