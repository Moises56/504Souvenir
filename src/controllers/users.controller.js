const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require('passport');
var async = require('async');
const { unregisterDecorator } = require('handlebars');

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const fsExtra = require('fs-extra');


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
      console.log(newUser);
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'Estas Registrado.');
      res.redirect('/users/signin');
    }
  }
};

    // console.log(req.body)
    //res.send('recivido')
     // res.send('signup');
  

  usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
    
    
  };

  //  usersCtrl.renderSigninForm2 = (req, res) => {
  //    res.render('cart/cart');
    
  // };
  // usersCtrl.signin = (req,res)=>{
  //   User.findOne({ admin: req.admin='true'},  async function(err, admin) {
  //     if (admin = false) {
  //       usersCtrl.signin = passport.authenticate("local", {
  //         successRedirect: "/notes",
  //         failureRedirect: "/users/signin",
  //         failureFlash: true,
      
            
  //       })
  //     }
      
  //   });
  // }
  
  // usersCtrl.signin = (req,res) =>{
  //   User.findOne({ email: req.body.email},  function(err, user) {
  //         if (user.admin = 'false') {
  //           passport.authenticate("local", {
  //              successRedirect: "/notes",
  //              failureRedirect: "/users/signin",
  //              failureFlash: true
          
                
  //            });
  //          }else{

  //           passport.authenticate("local", {
  //             successRedirect: "/notes",
  //             failureRedirect: "/users/signin",
  //             failureFlash: true
         
               
  //           });
             
  //           req.flash('success_msg', 'Su Contraseña ha sido Actualizada');
  //           res.redirect('/notes');
  //          }
          
  //        });
  // };

  // function requireAdmin() {
  //   return function(req, res, next) {
  //     User.findOne({ email: req.body.email }, function(err, user) {
  //       if (err) { return next(err); }
  
  //       if (!user) { 
  //         // Do something - the user does not exist
  //         req.flash('error', 'Credenciales Incorrectas');
  //             return res.redirect('/users/userAdmin');
  //       }
  //       if (!user.admin==true) { 
  //         req.flash('error', 'No es un usuario Administrador');
  //         return res.redirect('/users/userAdmin');
  //         // Do something - the user exists but is no admin user
  //       }
  //       // Hand over control to passport
  //       next();
      
  //     });
  //   }
    
  // }
 
    usersCtrl.signin = passport.authenticate("local", {
      successRedirect: "/notes",
     failureRedirect: "/users/signin",
      failureFlash: true

      
    });

    usersCtrl.renderAdminPanelForm= async (req, res) =>{ //?Consutar a la base de datos
      const users = await User.find({ user: req.body.email })
      //.sort({ createdAt: -1 })
      .lean();//?busca el arreglo 
      
      res.render('users/adminPanel', { users }) //?pasalos objetos/muestra en pantalla
      console.log(users);
    };

    usersCtrl.deleteUser = async (req, res) => {
      const user =  await User.findByIdAndDelete(req.params.id);//?Elimina por ID
       //const result = await cloudinary.v2.uploader.destroy(note.public_id);
       
       req.flash("success_msg", 'Usuario '+ user.name+' '+user.apellido + ' Eliminado');
       res.redirect('/users/adminPanel');
     };

    // usersCtrl.renderAdminPanelForm = (req, res) => {
    //   User.find().then(result=>{
    //     res.send(result);
    //     res.end();
    //   }).catch(error=>{
    //     res.send(error);
    //     res.end();
    //   })
    //   res.render('users/adminPanel');
    // };
    // personas:[];
    // ngOnInit(){
    //   this.httpClient.get(´${this.backendHost}/usuarios´)
    //   .subscribe( res=>{
    //     this.personas = res;
    //     console.log(this.personas)
    //   });
    // }
    // usersCtrl.userAdmin = passport.authenticate("local", {
    //   successRedirect: "/notes",
    //  failureRedirect: "/users/userAdmin",
    //   failureFlash: true
  
      
    // });

  

  usersCtrl.renderUserAdminForm = (req, res) => {
    res.render('users/userAdmin');
    
    
  };
  
  usersCtrl.userAdmin = passport.authenticate("local", {
    successRedirect: "/users/adminPanel",
   failureRedirect: "/users/userAdmin",
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
            const errors = [];
            const { password, confirm_password } = req.body;
            if (password != confirm_password) {
              errors.push({ text: 'Contraseñas No Coinciden.' });
            }
            if (password.length < 4) {
              errors.push({ text: 'Las Contraseñas requiere almenos 4 caratcteres.' });
            }if (errors.length > 0) {
              res.render('users/newPass', {
                errors,
                password,
                confirm_password
              });
            }else{
              user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            user.password = await user.encryptPassword(password);
            await user.save();

            req.flash('success_msg', 'Su Contraseña ha sido Actualizada');
            res.redirect('/users/signin');
            }
            
            
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

  usersCtrl.renderUserEditForm = async (req, res) => {
    // res.send('Edit form')
    const users = await User.findById(req.params.id).lean(); //buscando en la base el ID
    // console.log(users._id);
    // if(users._id != req.user.id){
    //  req.flash('error_msg', "No esta Autorizado")   
    //  return res.redirect('/users/adminPanel');
 
    // }
   // console.log(note)
    res.render('users/editeUser', { users }); //pasando el valor
   
 };

  
usersCtrl.updateUsers = async (req, res) => {
  const { name, apellido, email } = req.body;
  //const resultado = await cloudinary.v2.uploader.upload(req.file.path);
  
  await User.findByIdAndUpdate(req.params.id, { name, apellido, email });
  //await fsExtra.unlink(req.file.path)
  // apdateNote.path = 'img/uploads/'+req.file.filename;
  // console.log(req.file);
  req.flash("success_msg", "Usuario Actualizado Con Exito");
  res.redirect("/users/adminPanel");
};

usersCtrl.renderUserEditPerfilForm = async (req, res) => {
  // res.send('Edit form')
  const users = await User.findById(req.params.id).lean(); //buscando en la base el ID
  
  res.render('users/editeUserPerfil', { users }); //pasando el valor
 
};



usersCtrl.updateUsersPerfil = async (req, res) => {
  const { name, apellido, email } = req.body;
  const resultado = await cloudinary.v2.uploader.upload(req.file.path);
  await User.findByIdAndUpdate(req.params.id, { name, apellido, email,imgURL: resultado.url });
  console.log(resultado);
  await fsExtra.unlink(req.file.path)
 
  //apdateNote.path = 'img/uploads/'+req.file.filename;
  // console.log(req.file);
  req.flash("success_msg", "Usuario Actualizado Con Exito");
  res.redirect("/notes");
};


usersCtrl.renderCorreoPassForm = async (req, res) => {
  // res.send('Edit form')
  const users = await User.findById(req.params.id).lean(); //buscando en la base el ID
  
  res.render('users/correoPass', { users }); //pasando el valor
 
};

usersCtrl.renderNewUserForm = (req, res) => {
  res.render('users/newUser');
};

  usersCtrl.newUser = async (req, res) => {
  const errors = [];
  const { name, apellido, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: 'Contraseñas No Coinciden.' });
  }
  if (password.length < 4) {
    errors.push({ text: 'Las Contraseñas requiere almenos 4 caratcteres.' });
  }
  if (errors.length > 0) {
    res.render('users/newUser', {
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
      res.redirect('/users/newUser');
    } else {
      // Guardar nuevo usuario
      const newUser = new User({ name, apellido, email, password });
      console.log(newUser);
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'Usuario Agregado con Exito');
      res.redirect('/users/adminPanel');
    }
  }
};

  module.exports = usersCtrl;

