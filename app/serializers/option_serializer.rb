class OptionSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :action, :result, :is_complete
end
