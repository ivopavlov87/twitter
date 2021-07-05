load 'validation_helpers.rb'

class User < ApplicationRecord  
  
  attr_reader :password

  # check make sure username, password_digest, and session_token are present
  validates :username, :password_digest, :session_token, presence: true

  # check to make sure username has not been registered
  validates :username, uniqueness: { case_sensitive: false }

  # check to make sure username is at least 4 chars, and at most 30, and is only allowed chars
  # valid_username is custom validation method
  validates :username, length: { minimum: 4, maximum: 30 }, valid_username: true

  # check to make sure password is between 8 and 30 chars, secure_password is
  # a custom validation method, allow_nil true is because password itself is
  # not store on DB
  validates :password, length: { minimum: 8, maximum: 30 }, secure_password: true, allow_nil: true

  after_initialize :ensure_session_token

  has_many :tweets, dependent: :destroy

  def self.find_by_credentials(username, password)

    user = nil;
    
    user = User.find_by(username: username)

    user && user.is_password?(password) ? user : nil
  end

  # hashes password upon creation and adds it to password_digest column
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  # verification of password
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end