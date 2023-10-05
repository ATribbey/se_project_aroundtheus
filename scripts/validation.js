// --------------- ELEMENTS --------------- >>

// enabling validation by calling enableValidation()
// pass all the settings on call

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// --------------- FUNCTIONS --------------- >>

function hideInputError(form, input, options) {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = input.validationMessage;
  input.classList.remove(options.errorClass);
}

function showInputError(form, input, options) {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = input.validationMessage;
  input.classList.add(options.errorClass);
}

function checkInputValidity(form, input, options) {
  if (!input.validity.valid) {
    showInputError(form, input, options);
  } else {
    hideInputError(form, input, options);
  }
}

function toggleButtonState(inputElements, submitButton, options) {
  let foundInvalid = false;
  inputElements.forEach((input) => {
    if (!input.validity.valid) {
      foundInvalid = true;
    }
  });

  if (foundInvalid) {
    submitButton.classList.add(options.inactiveButtonClass);
  } else {
    submitButton.classList.remove(options.inactiveButtonClass);
  }
}

function setEventListeners(form, options) {
  const submitButton = form.querySelector(options.submitButtonSelector);
  const inputElements = Array.from(
    form.querySelectorAll(options.inputSelector)
  );

  inputElements.forEach((input) => {
    input.addEventListener("input", (event) => {
      checkInputValidity(form, input, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formElements = Array.from(
    document.querySelectorAll(options.formSelector)
  );

  formElements.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    setEventListeners(form, options);
  });
}

enableValidation(options);
