class ChangeDateTypeInEvent < ActiveRecord::Migration[5.2]

    def self.up
      change_column :events, :date, :string
    end
   
    def self.down
      change_column :events, :date, :datetime
  end
end

