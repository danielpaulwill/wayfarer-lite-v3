class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :is_complete, :character_id
end
