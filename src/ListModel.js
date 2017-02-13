
export class ListCollection {
  constructor(data) {
    this.items = data.map( item => new ListItem(item) );
  }

  getSelectedItems() {
    console.log(' SELECTED : ', this.items.filter( item => (item.selected > 0)) );
    return this.items.filter( item => (item.selected > 0) );
  }

  getTotalSelected() {
    return this.items.reduce((acc, item) => (acc + item.selected), 0);
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => {
      if(item.selected > 0) {
        acc += (item.selected * parseFloat(item.price) );
      }
      return acc;
    }, 0);
  }

  addToShoppingCard(id) {
    this.items.find( item => {
      return item.id === id;
    }).add();
    return this.items;
  }

  removeFromShoppingCard(id) {
    this.items.find( item => {
      return item.id === id;
    }).remove();
    return this.items;
  }
}

export class ListItem {
  constructor(data) {

    this.id = data.id;
    this.name = data.name;
    this.image = data.image;
    this.description = data.description;
    this.price = data.price;
    this.selected = 0;
  }

  add() {
    this.selected++;
  }

  remove() {
    this.selected = (this.selected > 0) ? this.selected - 1 : 0;
  }

}
