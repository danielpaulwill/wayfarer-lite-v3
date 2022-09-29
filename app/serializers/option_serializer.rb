class OptionSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :name, :description, :is_complete
end
