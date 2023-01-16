class RemoveDetailsFromOptions < ActiveRecord::Migration[6.1]
  def change
    remove_column :options, :name, :string
    remove_column :options, :description, :string
  end
end
