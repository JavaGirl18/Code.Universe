class Organizer < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_many :posts, dependent: :destroy
end
