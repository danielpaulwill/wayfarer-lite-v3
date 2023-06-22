class AddColumnsToOptions < ActiveRecord::Migration[6.1]
  def change
    add_column :options, :result_benefit, :string
    add_column :options, :additional_sequence, :boolean
    add_column :options, :additional_sequence_type, :string
  end
end
