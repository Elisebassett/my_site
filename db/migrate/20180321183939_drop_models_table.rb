class DropModelsTable < ActiveRecord::Migration[5.1]
  def up
    drop_table :models
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
