class Post < ApplicationRecord
  validates :title, :comment, presence: true
  belongs_to :attendee
  has_many :events, through: :user
end
