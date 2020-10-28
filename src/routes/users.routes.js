const {Router} = require('express');
const router = Router();
const User = require('../models/User');


const { renderSignUpForm,
    renderSigninForm,
    renderRecuperarForm,
    renderNewPassForm,
    renderCodigoForm,
    codigo,
    newPass,
    recuperar,
    signup,
    signin,
    logout } = require('../controllers/users.controller')

router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signup);

router.get('/users/recuperar', renderRecuperarForm);
router.post('/users/recuperar', recuperar);

router.get('/users/signin', renderSigninForm);
router.post('/users/signin', signin);

router.get('/users/newPass/:token', renderNewPassForm);
router.post('/users/newPass/:token', newPass);

router.get('/users/codigo/', renderCodigoForm);
router.post('/users/codigo/', codigo);

router.get('/users/logout', logout);

var EmailCtrl = require('../controllers/mail.controllers');
//email route

router.post('/email', EmailCtrl.sendEmail);










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