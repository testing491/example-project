class Pokemon < ApplicationRecord
    validates :name, presence: true
    validates :location, presence: true
    validates :move, presence: true
end
