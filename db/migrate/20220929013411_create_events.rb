class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :location_id
      t.string :name
      t.string :description
      t.boolean :is_complete

      t.timestamps
    end
  end
end
