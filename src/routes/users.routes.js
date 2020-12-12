const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const Cart = require("../models/Cart");
const Order = require("../models/Order");

const {isAuthenticated} = require('../helpers/validacion');

const { renderSignUpForm,
    renderSigninForm,
    renderRecuperarForm,
    renderNewPassForm,
    renderCodigoForm,
    renderUserAdminForm,
    renderAdminPanelForm,
    renderUserEditForm,
    renderNewUserForm,
    renderUserEditPerfilForm,
    renderCorreoPassForm,
    newCorreoPass,
    updateUsersPerfil,
    deleteUser,
    updateUsers,
    newUser,
    admin,
    codigo,
    newPass,
    recuperar,
    signup,
    signin,
    userAdmin,
    logout } = require('../controllers/users.controller')

router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);

router.get('/users/recuperar', renderRecuperarForm);
router.post('/users/recuperar', recuperar);

router.get('/users/signin', renderSigninForm);
router.post('/users/signin', signin);

router.get('/users/userAdmin', renderUserAdminForm);
router.post('/users/userAdmin',requireAdmin(), userAdmin);

router.get('/users/adminPanel',isAuthenticated, renderAdminPanelForm);
//router.post('/users/admin', admin);

router.delete('/users/delete/:id', deleteUser);

router.get("/users/editeUser/:id",isAuthenticated, renderUserEditForm);
router.put("/users/editeUser/:id",isAuthenticated, updateUsers);

router.get("/users/editeUserPerfil/:id",isAuthenticated, renderUserEditPerfilForm);
router.put("/users/editeUserPerfil/:id",isAuthenticated, updateUsersPerfil);

router.get('/users/newUser', renderNewUserForm);
router.post('/users/newUser', newUser);

router.get('/users/newPassPerfil/:id', renderNewPassForm);
router.post('/users/newPassPerfil/:id', newPass);

router.get('/users/correoPass/:id', renderCorreoPassForm);
//router.post('/users/correoPass/:id', newCorreoPass);

//router.get('/users/newPass/:token', renderNewPassForm);
//router.post('/users/newPass/:token', newPass);

router.get('/users/newPass', renderNewPassForm);
router.post('/users/newPass', newPass);

router.get('/users/codigo', renderCodigoForm);
router.post('/users/codigo', codigo);

router.get('/users/logout', logout);

var EmailCtrl = require('../controllers/mail.controllers');
//email route

router.post('/email', EmailCtrl.sendEmail);


function requireAdmin() {
  return function(req, res, next) {
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) { return next(err); }

      if (!user) { 
        // Do something - the user does not exist
        req.flash('error', 'Credenciales Incorrectas');
            return res.redirect('/users/userAdmin');
      }
      if (!user.admin==true) { 
        req.flash('error', 'No es un usuario Administrador');
        return res.redirect('/users/userAdmin');
        // Do something - the user exists but is no admin user
      }
      // Hand over control to passport
      next();
    
    });
  }
  
}


//?Estatus
// router.get('/notes/status',isAuthenticated, async (req, res) => {
//   const orders = await Order.find({ 'user': req.user})
//   // const note = await Order.find({ note: req.user.id })
//    .sort({ createdAt: -1 })
//    .lean();
//   // res.render('notes/status', {orders})
//   // console.log(orders)
//   // console.log(req.note.id )
//   // var cart;
//   //   orders.forEach(order => {
//   //     cart = new Cart(order.cart);
//   //     order.items = cart;
//   //   });
//     res.render('notes/status', {orders});
// });

router.get('/notes/status',isAuthenticated, async (req, res) => {
  const orders = await Order.find({ 'user': req.user}, (err, orders) => {
    
    if(err){
      return res.write('Error');
    }
    var cart;
    orders.forEach(order => {
      cart =new Cart(order.cart);
      order.items = cart.getItems();      
    });
    res.render('notes/status', {orders});
  })
  // const note = await Order.find({ note: req.user.id })
   .sort({ createdAt: -1 })
   .lean();
  // res.render('notes/status', {orders})
  // console.log(orders)
  // console.log(req.note.id )
  // var cart;
  //   orders.forEach(order => {
  //     cart = new Cart(order.cart);
  //     order.items = cart;
  //   });
    // res.render('notes/status', {orders});
});







module.exports = router;



/*
    const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require("passport");

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.singup = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match." });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters." });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The Email is already in use.");
      res.redirect("/users/signup");
    } else {
      // Saving a New User
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "You are registered.");
      res.redirect("/users/signin");
    }
  }
};

usersCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
};

usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
    failureFlash: true
  });

usersCtrl.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out now.");
  res.redirect("/users/signin");
};

module.exports = usersCtrl;
*/