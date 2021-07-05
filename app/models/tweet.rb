class Tweet < ApplicationRecord
  validates :user_id, :body, presence: true
  accepts_nested_attributes_for update_only: true

  belongs_to :user
end