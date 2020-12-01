module.exports = function Cart(cart) {
  this.items = cart.items || {};
  //   this.totalQty = cart.totalQty || 0;
  // this.numItems = cart.numItems || 0;
  this.totalPrice = cart.totalPrice || 0;
  this.totalQty = cart.totalQty || 0;

  this.add = function (item, id) {
    var cartItem = this.items[id];
    if (!cartItem) {
      cartItem = this.items[id] = { item: item, quantity: 0, precio: 0 };
    }
    cartItem.quantity++;
    cartItem.precio = cartItem.item.precio * cartItem.quantity;
    this.totalQty++;
    this.totalPrice += cartItem.item.precio;
  };

  this.getItems = function () {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };

  this.removeItem = (id) => {
    this.totalQty -= this.items[id].quantity;
    this.totalPrice -= this.items[id].precio;
    delete this.items[id];
  };

  this.reduceItem = (id) => {
    this.items[id].quantity--;
    this.items[id].precio -= this.items[id].item.precio;
    this.totalQty--;
    this.totalPrice -= this.items[id].item.precio;

    if (this.items[id].quantity <= 0) {
      delete this.items[id];
    }
  };

  this.aumentaItem = (id) => {
    this.items[id].quantity++;
    this.items[id].precio += this.items[id].item.precio;
    this.totalQty++;
    this.totalPrice += this.items[id].item.precio;
  };
};

//************************************* */

// module.exports = function Cart(oldCart) {
//     this.items = oldCart.items || {};
//     this.totalQty = oldCart.totalQty || 0;
//     this.totalPrice = oldCart.totalPrice || 0;

//     this.add = function (item, id) {
//         var storedItem = this.items[id];

//         if (!storedItem) {
//             storedItem = this.items[id] = { item: item, qty: 0, price: 0 }
//         }

//         storedItem.qty++;
//         storedItem.price = storedItem.item.price * storedItem.qty; //sub total
//         this.totalQty++;
//         this.totalPrice += storedItem.item.price; //total
//     }

//     this.generateArray = function () {
//         var array = [];
//         for (var id in this.items) {
//             array.push(this.items[id]);
//         }
//         return array;
//     }

//     this.removeItems = (id) => {
//         this.totalQty -= this.items[id].qty;
//         this.totalPrice -= this.items[id].price;
//         delete this.items[id];
//     }

//     this.reduceItem = (id) => {
//         this.items[id].qty--;
//         this.items[id].price -= this.items[id].item.price;
//         this.totalQty--;
//         this.totalPrice -= this.items[id].item.price;

//         if (this.items[id].qty <= 0) {
//             delete this.items[id];
//         }
//     }
// }
