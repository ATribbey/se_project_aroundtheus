export default class Section {
  constructor({ initialCards, renderer }, cardContainer) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._renderer = renderer;
    this._cardContainer = cardContainer;
  }
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
      return item;
    });

    addItem(item);
  }
  addItem(item) {
    cardContainer.prepend(item);
  }
}
