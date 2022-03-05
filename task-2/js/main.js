class ProductList{
  constructor(container='.products') {
    this.container = container;
    this.goods = [];
    this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
    this.render();//вывод товаров на страницу
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 2000},
      {id: 2, title: 'Mouse', price: 20},
      {id: 3, title: 'Keyboard', price: 200},
      {id: 4, title: 'Gamepad', price: 50},
    ];
  }
  
  render() {
    const block = document.querySelector(this.container);
    for(let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend",item.render());
//    block.innerHTML += item.render();
    }
  }

  /*
  Считаю, что уместнее всего считать цену товаров в Cart, так как подсчёт без 
  количества выбранных элементов это имеет мало смысла. Метод можно добавить
  в одном только в Cart, но домножать на количество элементов
  */
  getTotalItemsPrice() {
    return Object
      .values(this.goods)
      .reduce((acc, product) => acc + product.price, 0);
  }
}

class ProductItem{
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
  }
  render() {
    return `<div class="product-item">
      <img src="${this.img}">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
      <button class="buy-btn">Купить</button>
    </div>`
  }
}

let list = new ProductList();
console.log(list.getTotalItemsPrice())

class Cart {
  // Создаст пустой массив объектов basket
  constructor(container = "") {}

  getTotalItemCount() {}

  getTotalItemsPrice() {}

  // Будет вызывать в себе render экземпляра класса CartItem
  render(productId) {}

  // Будет вызывать в себе render экземпляра класса Cart, getTotalItemCount и getTotalItemsPrice
  addToCart(id, name, price) {}
}

class CartItem {
  constructor() {}

  render(productId) {}
}