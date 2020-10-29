const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require('passport');
var async = require('async');
const { unregisterDecorator } = require('handlebars');



usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

  usersCtrl.signup = async (req, res) => {
  const errors = [];
  const { name, apellido, email, password, confirm_password } = req.body;
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
      apellido,
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
      const newUser = new User({ name, apellido, email, password });
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

  usersCtrl.renderRecuperarForm = (req, res) => {
    res.render('users/recuperar');
  };

  usersCtrl.recuperar = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/recuperar",
    failureFlash: true
  });
  
  
  usersCtrl.renderNewPassForm = (req, res) => {

    res.render('users/newPass');
    //User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() }}, function(err, user) {
      //if (!user) {
        //req.flash('error', 'El token de restablecimiento de contraseña no es válido o ha caducado.');
       // return res.redirect('/users/recuperar');
     // }else{
      //  res.render('users/newPass',req.user);
     // }
      
    //});
  } /*function (req, res) {
    
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect('/');
    }
    var token = req.params.token;
    users.checkReset(token, req, res, function (err, data) {
        if (err)
            req.flash('error', err);

        //show the UI with new password entry
        res.render('users/newPass');
    });
}*/
  
 
  usersCtrl.newPass = async (req, res) => {
    //var token =decodeURIComponent(req);
   // console.log(token);
    //User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() }}, async function(err, user) {
      //console.log(req.params.id);

    //const {password}  = req.body;
    //await User.findByIdAndUpdate(req.params.id,{password});
    //console.log({password});
    //req.flash("success_msg", "Se cambio con Exito");
    //res.redirect("/users/signin");
      
      //user.password = req.body;
      //user.resetPasswordToken = undefined;
      //user.resetPasswordExpires = undefined;

     // user.save();
    //});
  }
  
  //------------------
  

  /*function (req, res) {
    if (req.isAuthenticated()) {
        //user is alreay logged in
        return res.redirect('/');
    }
    users.reset(req, res, function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/newPass');
        }
        else {
            req.flash('success', 'Password successfully reset.  Please login using new password.');
            return res.redirect('/signin');
        }
    });
  }*/
  
  
  
  

  usersCtrl.renderCodigoForm = (req, res) => {
    res.render('users/codigo');
  };

  usersCtrl.codigo =  (req, res) => {
      
          User.findOne({ resetPasswordToken: req.body.codigo, resetPasswordExpires: { $gt: Date.now() } },  async function(err, user) {
            if (!user) {
              req.flash('error', 'El codigo de restablecimiento de contraseña no es válido o ha caducado');
              return res.redirect('/users/newPass');
            }
            
            const {password} = req.body;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            user.password = await user.encryptPassword(password);
            await user.save();

            req.flash('success_msg', 'Su Contraseña ha sido Actualizada');
            res.redirect('/users/signin');
          });
          
        }
      
    


      //User.findOne({ resetPasswordToken: req.body.codigo, resetPasswordExpires: { $gt: Date.now() }}, function(err, user) {
    //  if (!user) {
        //req.flash('error', 'El token de restablecimiento de contraseña no es válido o ha caducado.aaaaaa');
        //return res.redirect('/users/recuperar');
        
      //}else{
      //  user.password = req.body.password;
       // user.resetPasswordToken = undefined;
      //  user.resetPasswordExpires = undefined;
      //  user.save();
     // }
    //  req.flash('sucess_msg', 'Se cambio la contraseña correctamente');
   // });
 // }
  
  /*= (req, res) => {
        User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
          if (!user) {
            req.flash('error', 'Password reset token is invalid or has expired.');
            return res.redirect('back');
          }
  
          user.password = req.body.password;
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;
  
          user.save();
        });
  }*/

  

  module.exports = usersCtrl;

