const mongoose = require('mongoose')


const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;


mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
 .then(db => console.log('Base Conectada'))
 .catch(err => console.log(err));
 
 require('./models/Order');


 //?mongo "mongodb+srv://cluster0.wik3y.mongodb.net/<dbname>" --username moises

 //?mongodb+srv://moises:<password>@cluster0.wik3y.mongodb.net/<dbname>?retryWrites=true&w=majority