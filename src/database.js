const mongoose = require('mongoose')
// var MongoStore = require('connect-mongo')(session);



// const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
// const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.set('useFindAndModify', false);
//mongoose.connect(process.env.MONGODB_URI, {
    mongoose.connect('mongodb+srv://moises:moises.123@cluster0.wik3y.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
 .then(db => console.log('Base Conectada'))
 .catch(err => console.log(err));
 
 //equire('./models/Order');

 //'mongodb+srv://moises:moises.123@cluster0.wik3y.mongodb.net/<dbname>?retryWrites=true&w=majority'

//shell
//mongo "mongodb+srv://cluster0.wik3y.mongodb.net/504Venirdb" --username moises

 //?mongo "mongodb+srv://cluster0.wik3y.mongodb.net/<dbname>" --username moises

 //?mongodb+srv://moises:<password>@cluster0.wik3y.mongodb.net/<dbname>?retryWrites=true&w=majority