class AddEventIdToPosts < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :event, foreign_key: true
  end
end
