class AddRestrictionTypeToOptions < ActiveRecord::Migration[6.1]
  def change
    add_column :options, :restriction_type, :string
  end
end
