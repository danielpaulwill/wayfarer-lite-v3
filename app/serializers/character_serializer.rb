class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :avatar, :health, :evil, :strength, :defense, :luck
end
