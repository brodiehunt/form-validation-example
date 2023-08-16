
// nodes for form input elements and error boxes
const form = document.querySelector('.form');
const submitErrorMessage = document.querySelector('.submit-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const countryInput = document.getElementById('country');
const countryError = document.getElementById('country-error');
const zipInput = document.getElementById('zip');
const zipError = document.getElementById('zip-error');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const passwordConfirmInput = document.getElementById('password-confirm');
const passwordConfirmError = document.getElementById('password-confirm-error');

// Functions that check if form feild is valid and displays relevant message
const showEmailError = () => {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = 'You need to enter an email address.';
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = 'You need to enter a valid email address.';
  } else if (emailInput.validity.tooShort) {
    emailError.textContent = `Email must be ${emailInput.minLength} characters long.`
  } else {
    emailError.textContent = '';
  }
}

const showCountryError = () => {
  if(countryInput.validity.valueMissing) {
    countryError.textContent = 'Please choose a country';
  } else {
    countryError.textContent = '';
  }
}

const showZipError = () => {
  if (zipInput.validity.valueMissing) {
    zipError.textContent = 'Please enter ZIP code.';
  } else if (zipInput.validity.tooShort || zipInput.validity.tooLong) {
    zipError.textContent = 'ZIP should be 4 digits long.';
  } else if (zipInput.validity.patternMismatch) {
    zipError.textContent = 'ZIP should only contain numbers.'
  } else {
    zipError.textContent = '';
  }
}

const showPasswordError = () => {
  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password."
  } else if (passwordInput.validity.tooShort) {
    passwordError.textContent = `Your password needs to contain at least ${passwordInput.minLength} characters.`
  } else if (passwordInput.validity.patternMismatch) {
    passwordError.textContent = 'Your password should contain at least one uppercase letter and special character (!, $, @, %, .)';
  }
}

const showPasswordConfirmError = () => {
  if (passwordConfirmInput.validity.valueMissing) {
    passwordConfirmError.textContent = 'You need to confirm your password.';
  } else if (passwordConfirmInput.validity.customError) {
    passwordConfirmError.textContent = 'Passwords must match.';
  } else {
    passwordConfirmInput.setCustomValidity('');
  }
}

// Event listeners for input on each form feild, checks if feild is valid
emailInput.addEventListener('input', () => {
  if (!emailInput.validity.valid) {
    showEmailError();
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('invalid');
  }

})

countryInput.addEventListener('input', () => {
  if (!countryInput.validity.valid) {
    showCountryError();
  } else {
    countryError.textContent = '';
    countryInput.classList.remove('invalid');
  }
})

zipInput.addEventListener('input', () => {
  if (!zipInput.validity.valid) {
    showZipError();
  } else {
    zipError.textContent = '';
    zipInput.classList.remove('invalid');
  }
})

passwordInput.addEventListener('input', () => {
  if (!passwordInput.validity.valid) {
    showPasswordError();
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('invalid');
  }
})

passwordConfirmInput.addEventListener('input', () => {
  if (passwordConfirmInput.value !== passwordInput.value) {
    passwordConfirmInput.setCustomValidity("Passwords must match");
  } else {
    passwordConfirmInput.setCustomValidity('');
  }
  if (!passwordConfirmInput.validity.valid) {
    showPasswordConfirmError();
  } else {
    passwordConfirmError.textContent = '';
    passwordConfirmInput.classList.remove('invalid');
  }
})

// Checks if form feilds are valid, prevents submit if they are not
// Highlights invalid feilds as red.
form.addEventListener('submit', (event) => {
  let errorMessageNeeded = false;
  
  if (!emailInput.validity.valid) {
    showEmailError()
    emailInput.classList.add('invalid');
    errorMessageNeeded = true;
  } else {
    emailInput.classList.remove('invalid');
  };

  if (!countryInput.validity.valid) {
    showCountryError()
    countryInput.classList.add('invalid')
    errorMessageNeeded = true;
  } else {
    countryInput.classList.remove('invalid');
  };

  if (!zipInput.validity.valid) {
    showZipError();
    zipInput.classList.add('invalid');
    errorMessageNeeded = true;
  } else {
    zipInput.classList.remove('invalid');
  }

  if (!passwordInput.validity.valid) {
    showPasswordError()
    passwordInput.classList.add('invalid');
    errorMessageNeeded = true;
  } else {
    passwordInput.classList.remove('invalid');
  }

  if (!passwordConfirmInput.validity.valid) {
    showPasswordConfirmError();
    passwordConfirmInput.classList.add('invalid');
    errorMessageNeeded = true;
  } else {
    passwordConfirmInput.classList.remove('invalid');
  }

  if (errorMessageNeeded) {
    submitErrorMessage.classList.add('show-submit-error');
    event.preventDefault();
  } else {
    submitErrorMessage.classList.remove('show-submit-error');
  }

})
