const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    order:{type:String},
    total:{type:String}
});

module.exports = model('Order',orderSchema)