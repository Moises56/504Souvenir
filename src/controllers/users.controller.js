const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require('passport');

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

  usersCtrl.signup = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: 'Contraseñas No Coinciden.' });
  }
  if (password.length < 4) {
    errors.push({ text: 'Las Contraseñas requiere almenos 4 caratcteres.' });
  }
  if (errors.length > 0) {
    res.render('users/signup', {
      errors,
      name,
      email,
      password,
      confirm_password
    });
  } else {
    // par las coindidencias del email
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash('error_msg', 'El correo ya esta en uso.');
      res.redirect('/users/signup');
    } else {
      // Guardar nuevo usuario
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'Estas Registrado.');
      res.redirect('/users/signin');
    }
  }
};

    //console.log(req.body)
    //res.send('recivido')
     // res.send('signup');
  

  usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
  };
  
 
  usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
    failureFlash: true
  });


  usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Session Cerrada.');
    //res.send('logout');
    res.redirect('/users/signin');
  };


  module.exports = usersCtrl;

