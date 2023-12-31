import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector("#confirm-delete-form");
    this._confirmBtn = this._popupElement.querySelector("#delete-card-btn");
  }

  setSubmitAction(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }

  loadingButtonState() {
    this._confirmBtn.textContent = "Deleting...";
  }

  resetButtonState() {
    this._confirmBtn.textContent = "Yes";
  }
}
