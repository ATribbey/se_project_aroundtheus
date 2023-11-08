export default class Card {
  constructor({ name, link }, cardSelector, clickHandler) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._clickHandler = clickHandler;
  }
  _setEventListeners() {
    this._cardElement
      .querySelector(".card__button-like")
      .addEventListener("click", () => {
        this._likeHandler();
      });

    this._cardElement
      .querySelector(".card__button-delete")
      .addEventListener("click", () => {
        this._deleteHandler();
      });

    this._cardImageElement.addEventListener("click", () => {
      this._clickHandler(this);
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

    this._cardImageElement = this._cardElement.querySelector(".card__image");
    this._cardTitleElement = this._cardElement.querySelector(".card__title");

    this._cardImageElement.alt = this._name;
    this._cardImageElement.src = this._link;
    this._cardTitleElement.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
