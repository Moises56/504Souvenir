const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride  = require('method-override');
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");



//?Initialitations
const app = express();
require("./config/passport");


//?Settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

//?Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method')); //?Eliminar notas
app.use(session({ //?guardar mensajes en el servidor
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



//?Globals Variables
app.use((req, res, next) => {
    //req.flash('success_msg');//*retorna el valor actual de succes_msg
    res.locals.success_msg = req.flash('success_msg'); //?para utilizarlo en cualquier vista
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    
    next();
});

//app.use((req, res, next) => {
    //res.locals.success_msg = req.flash("success_msg");
    //res.locals.error_msg = req.flash("error_msg");
    //res.locals.error = req.flash("error");
    //res.locals.user = req.user || null;
  //  next();







//?Routes
/*app.get('/', (req, res) => { //*muestra handlebars
    res.render('index')
//});*/

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));




//?Static failes
app.use(express.static(path.join(__dirname, 'public'))); //*mostrat la carpeta public




module.exports = app;