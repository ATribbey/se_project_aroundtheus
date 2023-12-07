export default class FormValidator {
  // First parameter stores selectors and form classes
  // Second takes the form being validated

  constructor(options, formElement) {
    this._formSelector = options.formSelector;
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
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
    input.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    // look for inputs inside of form
    const errorMessage = this._formElement.querySelector(`#${input.id}-error`);
    // reset error messages
    errorMessage.textContent = input.validationMessage;
    input.classList.remove(this._errorClass);
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

  _disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _changeButtonState() {
    // Change submit button state as needed

    let foundInvalid = false;
    this._inputElements.forEach((input) => {
      if (!input.validity.valid) {
        foundInvalid = true;
      }
    });

    if (foundInvalid) {
      // disable button
      this._disableButton();
    } else {
      // enable button
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }
  _setEventListeners() {
    // Add all needed event handlers

    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputElements = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );

    this._inputElements.forEach((input) => {
      input.addEventListener("input", (event) => {
        this._checkValidity(input);
        this._changeButtonState();
      });
    });
  }

  enableValidation() {
    // Enable validation of each form
    // (DO THIS FOR EACH FORM NEEDING VALIDATION)

    // enabling validation by calling enableValidation()
    // pass all the settings on call

    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    this._setEventListeners();
  }
}
