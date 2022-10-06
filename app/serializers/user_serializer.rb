class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_digest, :character
end
