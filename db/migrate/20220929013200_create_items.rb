class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :character_id
      t.string :name
      t.string :avatar
      t.integer :quantity

      t.timestamps
    end
  end
end
