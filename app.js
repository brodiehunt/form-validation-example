const form = document.querySelector('.form');
const submitErrorMessage = document.querySelector('.submit-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');

const passwordConfirmInput = document.getElementById('password-confirm');
const passwordConfirmError = document.getElementById('password-confirm-error');


emailInput.addEventListener('input', (event) => {
  if (!emailInput.validity.valid) {
    showEmailError();
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('invalid');
  }

})

passwordInput.addEventListener('input', (event) => {
  if (!passwordInput.validity.valid) {
    showPasswordError();
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('invalid');
  }
})

passwordConfirmInput.addEventListener('input', (event) => {
  console.log(passwordConfirmInput.value, passwordInput.value)
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

form.addEventListener('submit', (event) => {
  let errorMessageNeeded = false;
  if (!emailInput.validity.valid) {
    emailInput.classList.add('invalid');
    errorMessageNeeded = true;
  } else {
    emailInput.classList.remove('invalid');
  }
  if (!passwordInput.validity.valid) {
    passwordInput.classList.add('invalid');
    errorMessageNeeded = true;
  } else {
    passwordInput.classList.remove('invalid');
  }
  if (!passwordConfirmInput.validity.valid) {
    passwordConfirmInput.classList.add('invalid');
    errorMessageNeeded = true;
  } else {
    passwordConfirmInput.classList.remove('invalid');
  }
  if (errorMessageNeeded) {
    submitErrorMessage.classList.add('show-submit-error');
  } else {
    submitErrorMessage.classList.remove('show-submit-error');
  }
  event.preventDefault();
})

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
    passwordConfirmError.textContent = 'You need to confirm you password.';
  } else if (passwordConfirmInput.validity.customError) {
    passwordConfirmError.textContent = 'Passwords must match.';
  } else {
    passwordConfirmInput.setCustomValidity('');
  }
}
