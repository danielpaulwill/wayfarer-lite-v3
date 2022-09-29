class ItemSerializer < ActiveModel::Serializer
  attributes :id, :character_id, :name, :avatar, :quantity
end
