class ChangeTimeTypeInEvent < ActiveRecord::Migration[5.2]
    def self.up
      change_column :events, :time, :string
    end
   
    def self.down
      change_column :events, :time, :time
  end

end
