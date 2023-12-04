import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupButton = this._popupElement.querySelector(".modal__button");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._popupButton.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
