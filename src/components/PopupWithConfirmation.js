import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector("#confirm-delete-form");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
