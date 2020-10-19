const {Schema, model} = require('mongoose');

const orderSchema = new Schema(
    {
        order:{type:String},
        total:{type:String}
    },{
    timestamps: true
});

module.exports = model('Order',orderSchema)