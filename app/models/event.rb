class Event < ApplicationRecord
  validates :title, :details, :location, :time, presence: true

  has_many :attendees, dependent: :destroy
  has_many :users, through: :attendees

  has_many :organizers, dependent: :destroy
  has_many :users, through: :organizers
  
  has_many :posts, dependent: :destroy
end
