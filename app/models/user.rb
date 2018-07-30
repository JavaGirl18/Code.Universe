class User < ApplicationRecord
    validates :name, :email, :number, presence: true, uniqueness: true
    validates :password, :presence => true, :length => {:within => 6..40}
    has_many :attendees, dependent: :destroy
    has_many :organizers, dependent: :destroy
  has_many :events,dependent: :destroy
    has_many :events, through: :organizers, dependent: :destroy
    has_many :events, through: :attendees, dependent: :destroy

 
end
