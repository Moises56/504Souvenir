const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
   req.flash('error_msg', 'No Esta Autorizado.');
  // req.flash.alertify.alert('error_msg', 'No Esta Autorizado.')
  res.redirect('/users/signin');
};

// helpers.isAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   req.flash('success_msg', 'Carrito Vacio empieza a agregar.');
//   res.redirect('/');
// };


module.exports = helpers;