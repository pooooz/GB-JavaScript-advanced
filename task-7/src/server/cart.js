let add = (cart, req) => {
  cart.contents.push(req.body);
  cart.countGoods += req.body.quantity;
  cart.amount += req.body.price;
  return JSON.stringify(cart, null, 2);
};

let change = (cart, req) => {
  let find = cart.contents.find(el => el.id_product === +req.params.id);
  find.quantity += req.body.quantity;
  cart.countGoods += req.body.quantity;
  cart.amount += find.price;
  return JSON.stringify(cart, null, 2);
};

let remove = (cart, req) => {
  let find = cart.contents.find(el => el.id_product === +req.params.id);
  cart.countGoods -= req.body.quantity;
  cart.amount -= find.price;
  if (find.quantity > 1) {
    find.quantity -= req.body.quantity;
  } else {
    cart.contents.splice(cart.contents.indexOf(find), 1);
  }
  return JSON.stringify(cart, null, 2);
}

module.exports = {
  add,
  change,
  remove
};