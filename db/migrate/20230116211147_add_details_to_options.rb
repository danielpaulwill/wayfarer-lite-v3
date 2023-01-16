class AddDetailsToOptions < ActiveRecord::Migration[6.1]
  def change
    add_column :options, :action, :string
    add_column :options, :result, :string
  end
end
