export default class Section {
  constructor({ items, renderer }, cardContainer) {
    this._name = items.name;
    this._link = items.link;
    this._renderer = renderer;
    this._cardContainer = cardContainer;
  }
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
      return item;
    });
  }
  addItem(item) {
    this._cardContainer.prepend(item);
  }
}
