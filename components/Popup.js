export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      const activePopup = this._popupElement.querySelector(".modal_opened");
      this.close(activePopup);
    }
  }

  setEventListeners() {
    //Add click event listener to close icon of popup

    const closeButton = this._popupElement.querySelector(".modal__close");
    closeButton.addEventListener("click", this.close);

    //Add click event listener to close to area of page shaded gray to close popup

    this._popupElement.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
