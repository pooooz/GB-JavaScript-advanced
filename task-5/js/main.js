const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    cartUrl: '/getBasket.json',
    products: [],
    filtered: [],
    isVisibleCart: false,
    cart: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    userSearch: '',
    show: false
  },

  methods: {
    filter(value) {
      const regexp = new RegExp(value, 'i');
      this.filtered = this.products.filter(product => regexp.test(product.product_name));
    },

    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },

    addProduct(product) {
      const find = this.cart.find(item => product.id_product === item.id_product);
      if (find) {
        find.quantity++;
      } else {
        const element = Object.assign({quantity: 1}, product);
        this.cart.push(element);
      }
    },

    removeProduct(product) {
      const find = this.cart.find(item => product.id_product === item.id_product);
      if (find.quantity > 1) {
        find.quantity--;
      } else {
        find.quantity--;
        this.cart.splice(this.cart.indexOf(product), 1);
      }
    },

    changeCartVisibility() {
      this.isVisibleCart = !this.isVisibleCart;
    }
  },

  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
        }
      });
    this.getJson(`getProducts.json`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
        }
      })
  }
})