class RemoveRestrictionFromOptions < ActiveRecord::Migration[6.1]
  def change
    remove_column :options, :restriction, :string
  end
end
