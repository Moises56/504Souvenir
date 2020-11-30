const { Schema, model } = require("mongoose");
// var productos = require("../routes/carrito.routes");

const NoteSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    filname: { type: String },
    path: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    precio: { type: Number },
    imgURL: { type: String },
    public_id: { type: String },
    user: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

var ProductsModel = model("Note", NoteSchema);
//  productos.setModel(ProductsModel);

module.exports = model("Note", NoteSchema);
