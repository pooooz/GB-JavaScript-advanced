const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
  constructor(container = '.products'){
    this.container = container;
    this.goods = []; //массив товаров из JSON документа
    this._getProducts()
      .then(data => { //data - объект js
        this.goods = data;
        this.render();
      });
  }

  _getProducts(){
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    const block = document.querySelector(this.container);
    for (let product of this.goods){
      const productObj = new ProductItem(product);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150'){
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }
  render(){
    return `<div class="product-item" data-id="${this.id}" data-name="${this.title} data-price="${this.price} ">
            <img src="${this.img}" alt="Some img">
            <div class="desc">
                <h3>${this.title}</h3>
                <p>${this.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>
        </div>`
  }
}

let list = new ProductsList();