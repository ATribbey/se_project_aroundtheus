export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupSelector.add("modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupSelector.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      const activePopup = this._popupSelector.querySelector(".modal_opened");
      this.close(activePopup);
    }
  }

  setEventListeners() {}
}
