class CreateOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :options do |t|
      t.integer :event_id
      t.string :name
      t.string :description
      t.boolean :is_complete

      t.timestamps
    end
  end
end
