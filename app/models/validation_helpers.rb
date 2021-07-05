class ValidUsernameValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    valid_chars = ("0".."9").to_a + ("A".."Z").to_a + ("a".."z").to_a + ["_"]

    unless value.chars.all? { |username_char| valid_chars.include?(username_char) }
      record.errors.add(attribute, "must contain only underscores and alphanumeric characters")
      # record.errors[attribute] << "must contain only underscores and alphanumeric characters"
    end

    if value.chars.first == "_"
      record.errors.add(attribute, "cannot start with an underscore")
      # record.errors[attribute] << "cannot start with an underscore"
    end

    if value.chars.last == "_"
      record.errors.add(attribute, "cannot end with an underscore")
      # record.errors[attribute] << "cannot end with an underscore"
    end
  end
end

class SecurePasswordValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)

    unless ("0".."9").to_a.any? { |num| value.include?(num) }
      record.errors.add(attribute, "must contain at least 1 number")
      # record.errors[attribute] << "must contain at least 1 number"
    end

    unless ("A".."Z").to_a.any? { |char| value.include?(char) }
      record.errors.add(attribute, "must contain at least 1 capital letter")
      # record.errors[attribute] << "must contain at least 1 capital letter"
    end

    unless ("a".."z").to_a.any? { |char| value.include?(char) }
      record.errors.add(attribute, "must contain at least 1 lowercase letter")
      # record.errors[attribute] << "must contain at least 1 lowercase letter"
    end

    special_chars = ['@', '%', '+', '!', '#', '$', '^', '?', ':', '(', ')', '[', ']', '~', '-', '.', '_']
    unless special_chars.any? { |special_char| value.include?(special_char) }
      record.errors.add(attribute, "must contain at least one of the following special characters: @ % + . ! # $ ^ ? : ( ) [ ] ~ - _ and cannot contain other special characters")
      # record.errors[attribute] << "must contain at least one of the following special characters: @ % + . ! # $ ^ ? : ( ) [ ] ~ - _"
    end
  end
end