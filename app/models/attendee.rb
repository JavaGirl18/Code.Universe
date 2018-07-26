class Attendee < ApplicationRecord
  belongs_to :event
  belongs_to :user
  has_many :posts
 
end
