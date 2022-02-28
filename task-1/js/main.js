const products = [
  {id: 1, title: 'Notebook', price: 2000},
  {id: 2, title: 'Mouse', price: 20},
  {id: 3, title: 'Keyboard', price: 200},
  {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product, image = "img/keyboard.jpg") => {
  return `<div class="product-item">
              <img src=${image}>
              <h3>${product.title}</h3>
              <p>$${product.price}</p>
              <button class="buy-btn">Купить</button>
          </div>`
};
const renderPage = list => {
  /* Запятые остаются, так как HTML разметке элемента мы присваиваем массив, 
    а при неявном преобразовании массива в строку, массив полностью приводится
    к строке. При использовании join() можно преобразовать массив к строке,
    указав разделитель явно*/
  const productsList = list.map(item => renderProduct(item)).join('');
  console.log(productsList);
  document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);