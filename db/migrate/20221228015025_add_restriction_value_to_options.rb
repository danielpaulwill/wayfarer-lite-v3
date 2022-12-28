class AddRestrictionValueToOptions < ActiveRecord::Migration[6.1]
  def change
    add_column :options, :restriction_value, :integer
  end
end
