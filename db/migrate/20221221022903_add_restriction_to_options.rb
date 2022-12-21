class AddRestrictionToOptions < ActiveRecord::Migration[6.1]
  def change
    add_column :options, :restriction, :string
  end
end
