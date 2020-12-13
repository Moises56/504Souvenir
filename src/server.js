const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const uuid = require('uuid').v4;
const {format} = require('timeago.js');
const methodOverride  = require('method-override');
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require('cookie-parser');
 var mongoose = require('mongoose');
 var MongoStore = require('connect-mongo')(session);
//  const alertifyjs = require('alertifyjs');
// const orderController = require('./controllers/order.contreller');

// var product = require ('./models/Note');
// var products = require('./routes/products.routes');



//?Initialitations
const app = express();
require("./config/passport");
//require('./models/Order');


//?Settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));//?mostra donde esta la carpeta views

app.engine('.hbs', exphbs({
    defaultLayout: 'main',  //*mostrar el archivo prncipal
    runtimeOptions: {allowProtoPropertiesByDefault: true,
        	         allowProtoMethodsByDefault: true,},

    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

//?Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));//?para poder resivir los datos del formulario
const storage =  multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});
app.use(multer({storage: storage}).single('image'));
//app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'));


app.use(express.json());
app.use(methodOverride('_method')); //?Eliminar notas
app.use(session({ //?guardar mensajes en el servidor
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    // cookie: { maxAge: 120 * 60 * 60 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//-------------------------
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended: true}));
//------------------

//?Globals Variables
app.use((req, res, next) => {
    //req.flash('success_msg');//*retorna el valor actual de succes_msg
    res.locals.success_msg = req.flash('success_msg'); //?para utilizarlo en cualquier vista
    res.locals.success_msgC = req.flash('success_msgC'); //?para utilizarlo en cualquier vista
    res.locals.success_msgCa = req.flash('success_msgCa'); //?para utilizarlo en cualquier vista
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
     res.locals.user = req.user || null;
    next();
});

//?tiempo format
app.use((req, res, next) => {
    app.locals.format = format;
    next();
});

app.use((req, res, next) => {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
})

//? res.locals is an object passed to hbs engine
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});


//?Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/carrito.routes'));

app.get('/recuperar', function(req, res) {
    res.render('forgot', {
      user: req.user
    });
  });


//?Static failes
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public'))); //*mostrat la carpeta public




module.exports = app;