class Location < ApplicationRecord
  has_many :events
  has_many :options, through: :events
  belongs_to :character
  validates_uniqueness_of :name, scope: :character_id
end
