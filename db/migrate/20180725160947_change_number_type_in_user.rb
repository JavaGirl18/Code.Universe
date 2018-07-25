class ChangeNumberTypeInUser < ActiveRecord::Migration[5.2]
  def self.up
    change_column :users, :number, :string
  end
 
  def self.down
    change_column :users, :dnumber, :integer
end
end
