export default class FormValidator {
  // First parameter stores selectors and form classes
  // Second takes the form being validated

  constructor(options, formElement) {
    this._formSelector = options.formSelector;
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.SubmitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
    this._formElement = formElement;
  }

  _showInputError(input) {
    // look for inputs inside of form
    const errorMessage = this._formElement.querySelector(`#${input.id}-error`);
    // get validation message
    errorMessage.textContent = input.validationMessage;
    // add error class to input
    // display error message
    input.classList.add(options.errorClass);
  }

  _hideInputError(input) {
    // look for inputs inside of form
    const errorMessage = this._formElement.querySelector(`#${input.id}-error`);
    // reset error messages
    errorMessage.textContent = input.validationMessage;
    input.classList.remove(options.errorClass);
  }

  _checkValidity(input) {
    // Check validity of specific form
    // loop through all the inputs to see if all are valid

    if (!input.validity.valid) {
      // if input is not valid
      this._showInputError(input);
    } else {
      // if all inputs are valid
      this._hideInputError(input);
    }
  }

  _buttonState(inputElements, submitButton, options) {
    // Change submit button state as needed

    let foundInvalid = false;
    inputElements.forEach((input) => {
      if (!input.validity.valid) {
        foundInvalid = true;
      }
    });

    if (foundInvalid) {
      // disable button
      submitButton.classList.add(options.inactiveButtonClassSelector);
      submitButton.disabled = true;
    } else {
      // enable button
      submitButton.classList.remove(options.inactiveButtonClass);
      submitButton.disabled = false;
    }
  }
  _setEventListeners(form, options) {
    // Add all needed event handlers

    const submitButton = form.querySelector(options.submitButtonSelector);
    const inputElements = Array.from(
      form.querySelectorAll(options.inputSelector)
    );

    inputElements.forEach((input) => {
      input.addEventListener("input", (event) => {
        this._checkValidity(input);
        this._buttonState(inputElements, submitButton, options);
      });
    });
  }

  enableValidation(options) {
    // Enable validation of each form
    // (DO THIS FOR EACH FORM NEEDING VALIDATION)

    // enabling validation by calling enableValidation()
    // pass all the settings on call

    const formElements = Array.from(
      document.querySelectorAll(options.formSelector)
    );

    formElements.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
      });

      this._setEventListeners(form, options);
    });
  }
}
