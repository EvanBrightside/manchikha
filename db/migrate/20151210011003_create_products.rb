class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.references :category, index: true, foreign_key:true, null: false

      t.timestamps
    end
  end
end
