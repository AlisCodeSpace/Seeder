export const PasswordValidation = (password) => {
  // Define regex patterns for validation
  const minLength = /.{6,}/; // At least 6 characters
  const capitalLetter = /[A-Z]/; // At least one uppercase letter
  const number = /[0-9]/; // At least one number
  const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

  // Validate password against all criteria
  if (!minLength.test(password)) {
    return "Password must be at least 6 characters long.";
  }
  if (!capitalLetter.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!number.test(password)) {
    return "Password must contain at least one number.";
  }
  if (!specialCharacter.test(password)) {
    return "Password must contain at least one special character.";
  }

  // If all validations pass
  return true;
};

export const EmailValidation = (email) => {
  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return "Email is required.";
  } else if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  return true;
};

// Validate Username
export const NameValidation = (name) => {
  if (!name || name.trim() === "") {
    return "Name is required.";
  }

  // Optionally, add length or character constraints
  if (name.length < 3) {
    return "Name must be at least 3 characters long.";
  }

  return true; // Valid username
};

export const PhoneNumberValidation = (phone) => {
  const phoneRegex = /^[0-9]{8,15}$/; // Allows only digits, 10-15 in length

  if (!phone) {
    return "Phone number is required.";
  }

  if (!phoneRegex.test(phone)) {
    return "Phone number must be between 10 and 15 digits.";
  }

  return true; // Valid phone number
};

export const CompanyURLValidation = (url) => {
  const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!url) {
    return "Company URL is required.";
  }

  if (!urlRegex.test(url)) {
    return "Please enter a valid URL (e.g., https://example.com).";
  }

  return true; // Valid company URL
};
