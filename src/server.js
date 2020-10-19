const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const methodOverride  = require('method-override');
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const orderController = require('./controllers/order.contreller');



//?Initialitations
const app = express();
require("./config/passport");
//require('./models/Order');


//?Settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));//?mostra donde esta la carpeta views

app.engine('.hbs', exphbs({
    defaultLayout: 'main',  //*mostrar el archivo prncipal
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

//?Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//?para poder resivir los datos del formulario
app.use(express.json());
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
     res.locals.user = req.user || null;
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

app.use('/',orderController);
//app.use(require('./routes/order.routes'));




//?Static failes
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public'))); //*mostrat la carpeta public




module.exports = app;