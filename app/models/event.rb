class Event < ApplicationRecord
  belongs_to :attendee
  belongs_to :organizer
  has_many :users, through: :attendee
end
