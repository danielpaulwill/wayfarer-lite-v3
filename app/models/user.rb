class User < ApplicationRecord
  has_one :character
  has_many :locations, through: :character
  has_many :events, through: :locations

  has_secure_password
  # validates :password, confirmation: { case_sensitive: true }
  validates :username, presence: true, uniqueness: true 
end
