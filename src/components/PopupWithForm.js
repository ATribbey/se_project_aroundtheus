import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, submitType) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._submitType = submitType;
  }

  getInputValues() {
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
      this._handleFormSubmit(this.getInputValues());
    });
    super.setEventListeners();
  }

  loadingButtonState() {
    this._confirmBtn = this._popupElement.querySelector(".modal__button");

    this._confirmBtn.textContent = "Saving...";
  }

  resetButtonState() {
    this._confirmBtn.textContent = `${this._submitType}`;
  }
}
