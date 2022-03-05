"use strict"

class Basket {
  serverBasket = {};

  constructor(container = ".basket") {
    this.basketElement = document.querySelector(".basket");
    this.itemsTotalPrice = this.basketElement.querySelector(".basketTotalValue");
    this.basketTotalElement = this.basketElement.querySelector(".basketTotal");
  
    this._getBasketItems()
      .then(result => {
        this.serverBasket = result;
        this.items = Object.fromEntries(result.contents.map(product => [product.id_product, product]));
        this.itemsTotalPrice.textContent = result.amount;
        for (let product in this.items) {
          this.renderProduct(this.items[product]);
        }
      });
  }

  async _getBasketItems() {
    try {
      return (await fetch(`${API}/getBasket.json`)).json();
    } catch (error) {
      console.log(error);
    }    
  }

  renderNewProduct(product) {
    const productRow = `
      <div class="basketRow" data-id="${product.id_product}">
        <div>${product.product_name}</div>
        <div>
          <span class="productCount">${product.quantity}</span> шт.
        </div>
        <div>$${product.price}</div>
        <div>
          $<span class="productTotalRow">${(product.price * product.quantity).toFixed(2)}</span>
        </div>
      </div>
      `;
    this.basketTotalElement.insertAdjacentHTML("beforebegin", productRow);
  }

  renderProduct(product) {
    const basketRowElement = this.basketElement
      .querySelector(`.basketRow[data-id="${product.id_product}"]`);

    if (!basketRowElement) {
      this.renderNewProduct(product);
      return;
    }
  
    basketRowElement.querySelector('.productCount').textContent = product.quantity;
    basketRowElement
      .querySelector('.productTotalRow')
      .textContent = (product.price * product.quantity).toFixed(2);
  }

  getTotalItemsCount() {
    return Object.values(this.items).reduce((acc, product) => acc + product.quantity, 0);
  }
  
  getTotalItemsPrice() {
    return Object
      .values(this.items)
      .reduce((acc, product) => acc + product.price * product.quantity, 0);
  }

  addToCart(id, name, price) {
    if (!(id in this.items)) {
      this.items[id] = {id_product: id, product_name: name, price: price, quantity: 0};
      this.serverBasket.contents.push(this.items[id]);
    }

    this.items[id].quantity++;
    this.serverBasket.countGoods = this.getTotalItemsCount();
    this.serverBasket.amount = this.getTotalItemsPrice();
    this.itemsTotalPrice.textContent = this.serverBasket.amount;

    this.renderProduct(this.items[id]);
  }
}

let basket = new Basket(".basket");
console.log(basket);

document.querySelector(".btn-cart").addEventListener("click", () => {
  document.querySelector(".basket").classList.toggle("hidden");
});

document.querySelector(".products").addEventListener("click", (event) => {
  if(!event.target.classList.contains("buy-btn")) {
      return;
  }

  const featuredItemEl = event.target.closest(".product-item");

  const id = Number(featuredItemEl.dataset.id);
  const name = featuredItemEl.dataset.name;
  const price = Number(featuredItemEl.dataset.price);

  basket.addToCart(id, name, price);
});