class Event < ApplicationRecord
  validates :title, :details, :location, :time, presence: true
  belongs_to :attendee
  belongs_to :organizer
  has_many :users, through: :attendee
end
