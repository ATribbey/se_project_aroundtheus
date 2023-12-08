import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, submitType) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitType = submitType;
    this._submitBtn = this._popupElement.querySelector(".modal__button");
  }

  _getInputValues() {
    const inputList = Array.from(
      this._popupForm.querySelectorAll(".modal__input")
    );

    return inputList.reduce(
      (accumulator, inputNode) => ({
        ...accumulator,
        [inputNode.name]: inputNode.value,
      }),
      {}
    );
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  loadingButtonState() {
    this._submitBtn.textContent = "Saving...";
  }

  resetButtonState() {
    this._submitBtn.textContent = `${this._submitType}`;
  }
}
