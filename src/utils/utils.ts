import { IContactForm, IQuotingForm } from "@interfaces/index";

export const validateQuoteForm = (values: IQuotingForm) => {
  const errors: IQuotingForm = {};
  if (!values.fullName) {
    errors.fullName = 'Full Name is required';
  }

  if (!values.address) {
    errors.address = 'Address is required';
  } else if (!isValidAddress(values.address)) {
    errors.address = 'Invalid address';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone number is required';
  } else if (values.phoneNumber.length < 10) {
    errors.phoneNumber = 'Phone number includes 10-12 character';
  } else if (!isValidPhoneNumber(values.phoneNumber)) {
    errors.phoneNumber = 'Phone number must start with 0 or 61.';
  }

  if (!values.registration) {
    errors.registration = 'Rego is required';
  }

  if (!values.service) {
    errors.service = 'Service is required';
  }

  if (!values.comments) {
    errors.comments = 'Comments is required';
  }

  return errors;
};

export const validateContactForm = (values: IContactForm) => {
  const errors: IContactForm = {};
  if (!values.userFirstName) {
    errors.userFirstName = 'Full Name is required';
  }

  if (!values.userLastName) {
    errors.userLastName = 'Last Name is required';
  }

  if (!values.userEmail) {
    errors.userEmail = 'Email is required';
  } else if (!isValidEmail(values.userEmail)) {
    errors.userEmail = 'Invalid email address';
  }

  if (!values.userPhoneNo) {
    errors.userPhoneNo = 'Phone number is required';
  } else if (values.userPhoneNo.length < 10) {
    errors.userPhoneNo = 'Phone number includes 10-12 character';
  } else if (!isValidPhoneNumber(values.userPhoneNo)) {
    errors.userPhoneNo = 'Phone number must start with 0 or 61.';
  }

  if (!values.message) {
    errors.message = 'Comments is required';
  }

  return errors;
};

const isValidEmail = (email: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regex.test(email);
}

const isValidPhoneNumber = (phoneNumber: string) => {
  const regex = /^(0|61)\d+/;
  return regex.test(phoneNumber);
}

const isValidAddress = (address: string) => {
  const regex = /^[^!@#$%^&*()_+={}[\]:;"'<>?/\\|]*$/;
  return regex.test(address);
} 

export const capitalizeWords = (inputString: string) => {
  const words = inputString.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}