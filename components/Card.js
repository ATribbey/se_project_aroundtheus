export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }
  _setEventListeners() {
    this._cardElement
      .querySelector(".card__button-like")
      .addEventListener("click", this._likeHandler);

    this._cardElement
      .querySelector(".card__button-delete")
      .addEventListener("click", this._deleteHandler);

    this._cardImageElement = this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick(this);
      });
  }

  _likeHandler() {
    this._cardElement
      .querySelector(".card__button-like")
      .classList.toggle("card__button-like_active");
  }

  _deleteHandler() {
    this._cardElement.remove();
  }

  getNewCard() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._setEventListeners();

    return this._cardElement;
  }
}
