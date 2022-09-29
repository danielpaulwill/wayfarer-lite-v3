class Event < ApplicationRecord
  belongs_to :Location, optional: true
  has_many :options
end
