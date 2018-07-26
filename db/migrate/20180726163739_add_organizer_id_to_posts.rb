class AddOrganizerIdToPosts < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :organizer, foreign_key: true
  end
end
