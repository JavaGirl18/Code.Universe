class Event < ApplicationRecord
  validates :title, :details, :location, :time, presence: true
  has_many :attendees
  has_many :users, through: :attendees
  has_many :organizers
  has_many :users, through: :organizers
end
