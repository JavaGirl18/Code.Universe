class Post < ApplicationRecord
  validates :title, :comment, presence: true
  belongs_to :attendee, optional: true
  belongs_to :organizer, optional: true
  
end
