class User < ApplicationRecord
    has_many :events, through: :organizer
end
