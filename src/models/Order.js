// const {Schema, model} = require('mongoose');
const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    cart: { type: Object, required: true },
    address: { type: String },
    email: {type: String, require:true},
    // note: {type: Schema.Types.ObjectId, ref: "Note" },
    
    // producto: {ype: Schema.Types.ObjectId, ref: "User"},
    paymentId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Order", orderSchema);
// module.exports = mongoose.model("Order", orderSchema);

