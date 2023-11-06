export default class Section {
  constructor({ items, renderer }, container) {
    this._name = items.name;
    this._link = items.link;
    this._renderer = renderer;
    this._container = container;
  }
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
      return item;
    });
  }
  addItem(item) {
    this._container.prepend(item);
  }
}
