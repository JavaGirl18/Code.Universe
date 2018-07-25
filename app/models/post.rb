class Post < ApplicationRecord
  belongs_to :attendee
  has_many :events, through: :user
end
