const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User'); 

passport.use(new LocalStrategy({
  usernameField: 'email',
 usernameField: 'password'
}, async (email, password, done) => {

  // Match Email's User
  const user = await User.findOne({email});
  if (!user) {
    return done(null, false, { message: 'Usuario No Encontrado.' });
  } else {
    // Match Password's User
    const match = await user.matchPassword(password);
    if(match) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'password Incorrecta.' });
    }
  }
}));

passport.serializeUser((user, done) => { //recive dos  cosas el user y el done
  done(null, user.id);
});

passport.deserializeUser((id, done) => {//comprobar en la bd si existe por id
  User.findById(id, (err, user) => {
    done(err, user);
  });
});