import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewImage = this._popupElement.querySelector(
      "#card-preview-image"
    );
    this._previewTitle = this._popupElement.querySelector(
      "#card-preview-title"
    );
  }

  open = ({ name, link }) => {
    this._previewImage.src = link;
    this._previewImage.alt = `${name}`;
    this._previewTitle.textContent = `${name}`;
    super.open();
  };
}
