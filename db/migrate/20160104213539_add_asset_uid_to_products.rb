class AddAssetUidToProducts < ActiveRecord::Migration
  def change
    add_column :products, :asset_uid, :string
  end
end
