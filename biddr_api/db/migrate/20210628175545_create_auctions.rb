class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.date :end_date
      t.float :reserve_price

      t.timestamps
    end
  end
end
