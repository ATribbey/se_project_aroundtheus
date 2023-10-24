export default class FormValidator {
  // First parameter stores selectors and form classes
  // Second takes the form being validated

  constructor({ selector, formClass }, formElement) {
    this._selector = selector;
    this._formClass = formClass;
    this._formElement = formElement;
  }

  _checkValidity() {
    // Check validity of specific form
  }
  _submitState() {
    // Change submit button state as needed
  }
  _addEventHandlers() {
    // Add all needed event handlers
  }
  enableValidation() {
    // Enable validation of each form
    // (DO THIS FOR EACH FORM NEEDING VALIDATION)
  }
}
