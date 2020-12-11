const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Order = require("../models/Order");
//const Note = require("../models/Note");

const { isAuthenticated } = require("../helpers/validacion");
const passport = require("passport");

var fs = require("fs");
var Cart = require("../models/Cart");
var Product = require("../models/Note");
var mongoose = require("mongoose");
const { title } = require("process");

const stripe = require("stripe")(
  "sk_test_51HcP01KSAmtvjzoa4XIExo5vTvKwn3f2Ib99vAoNli1QLs4r4Ynr76WmmcEpqxN5NmQlCqOlwe4MvE5KPDO6BVvW00U0iVV37T"
);

router.get("/cart/add/:id", (req, res, next) => {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, (err, product) => {
    if (err) {
      req.flash("success_msgC", "No has agregado ");
      return res.redirect("/");
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    req.flash("success_msgC", "Producto agregado al carrito");
    res.redirect("/");
    // res.redirect("/notes/products");
    // console.log(cart);
  });
});



router.get("/cart/cart",isLoggedIn, function (req, res, next) {
  // var success_msg = req.flash('success')[0];
  
  if (!req.session.cart) {
    // req.flash("success_msg", "necesita registrarse")
    return res.redirect("notes/signin", {
      products: null,
    });
  }
  var cart = new Cart(req.session.cart);
  res.render("cart/cart", {
    title: "Producto a Comprar",
    // numItems: cart.items,
    products: cart.getItems(),
    totalPrice: cart.totalPrice,
    // success_msg,
    // noMsg: !success_msg,
  });
});

//? botones
router.get("/remove/:id", (req, res, next) => {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect("/cart/cart");
});

router.get("/reduce/:id", function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceItem(productId);
  req.session.cart = cart;
  res.redirect("/cart/cart");
});

router.get("/aumentar/:id", function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.aumentaItem(productId);
  // console.log(productId);
  req.session.cart = cart;
  res.redirect("/cart/cart");
});


//TODO Pagos con stripe

router.post("/checkout", isLoggedIn, async (req, res, next) => {
  if(!req.session.cart){
    return res.redirect('/users/signin')
  }
  const customers = await stripe.customers.create({
    //?comprador
    email: req.body.stripeEmail,
    source: req.body.stripeToken,
  });

  var cart = new Cart(req.session.cart);
  const charge = await stripe.charges.create({
    //?orden de Compra

    // amount: parseFloat(cart.totalPrice).toFixed(2),
    amount: Math.round(cart.totalPrice.toFixed(2) * 100),
    currency: "hnl",
    // source: req.body.stripeToken,
    customer: customers.id,
    description: 'test',

  });
    //? modelado para el status
const order = new Order({
  user: req.user,
  cart: cart,
  email: req.body.email,
  // note: req.note,
  paymentId: charge.id
});

await order.save() 
  req.flash("success_msg", "tu compra se ha realizado con éxito");
  req.session.cart = null;
  res.render("cart/succesPago");

 console.log(order)

});

module.exports = router;

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next()
  }
  res.redirect('/users/signin')
}
