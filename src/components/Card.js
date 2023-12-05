export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    clickHandler,
    deletePopup,
    handleDelete
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._clickHandler = clickHandler;
    this._deletePopup = deletePopup;
    this._handleDelete = handleDelete;
  }

  getId() {
    return this._id;
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
        this._deletePopup.open();
      });

    this._cardImageElement.addEventListener("click", () => {
      this._clickHandler({ name: this._name, link: this._link });
    });
  }

  _likeHandler() {
    this._cardElement
      .querySelector(".card__button-like")
      .classList.toggle("card__button-like_active");
  }

  deleteHandler() {
    this._cardElement.remove();
    this._cardElement = null;
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
