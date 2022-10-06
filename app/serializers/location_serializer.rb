class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :is_complete, :character_id

  has_many :events
  has_many :options, through: :events
end
