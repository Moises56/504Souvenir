const express = require('express');
const router = express.Router();

var fs = require('fs');
var Cart = require('../models/Cart');
var Product = require ('../models/Note');
var mongoose = require ("mongoose");


// router.get('/cart/cart', (req, res) => {
//   res.render('cart/cart')
// })

router.get('/cart/add/:id', (req, res, next) => {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
 
  Product.findById(productId, (err, product) => {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/');
    console.log(cart)
  });
});


router.get('/cart/cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('cart/cart', {
      products: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render('cart/cart', {
    title: 'Producto a Comprar',
    // numItems: cart.items,
    products: cart.getItems(),
    totalPrice: cart.totalPrice
  });
});

 router.get('/remove/:id', (req, res, next) => {
   var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

   cart.removeItem(productId);
    req.session.cart = cart;
   res.redirect('/cart/cart');
 });

 router.get('/reduce/:id', function(req, res, next) {
   var productId = req.params.id;
   var cart = new Cart(req.session.cart ? req.session.cart : {});

   cart.reduceItem(productId);
   req.session.cart = cart;
   res.redirect('/cart/cart');
 });


 router.get('/aumentar/:id', function(req, res, next) {
   var productId = req.params.id;
   var cart = new Cart(req.session.cart ? req.session.cart : {});

   cart.aumentaItem(productId);
   req.session.cart = cart;
   res.redirect('/cart/cart');
 });


module.exports = router;