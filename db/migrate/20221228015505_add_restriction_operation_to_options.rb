class AddRestrictionOperationToOptions < ActiveRecord::Migration[6.1]
  def change
    add_column :options, :restriction_operation, :string
  end
end
