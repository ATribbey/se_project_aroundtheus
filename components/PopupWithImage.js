import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor() {
    super();
    this._previewImage = this._popupElement.querySelector(
      "#card-preview-image"
    );
    this._previewTitle = this._popupElement.querySelector(
      "#card-preview-title"
    );
  }

  open = (data) => {
    this._previewImage.src = data.src;
    this._previewImage.alt = data.alt;
    this._previewTitle.textContent = data.textContent;
    super.open();
  };
}
