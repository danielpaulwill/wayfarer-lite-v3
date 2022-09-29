class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.integer :user_id
      t.string :name
      t.string :avatar
      t.integer :health
      t.integer :evil
      t.integer :strength
      t.integer :defense
      t.integer :luck

      t.timestamps
    end
  end
end
