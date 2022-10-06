class EventSerializer < ActiveModel::Serializer
  attributes :id, :location_id, :name, :description, :is_complete, :options
end
