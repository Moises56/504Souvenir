const {Schema, model} = require('mongoose');

const NoteSchema = new Schema(
    {
      title: {type: String,required: true },
      description: { type: String, required: true},
      filname: {type: String},
      path: {type: String},
      originalname: {type: String},
      mimetype: {type: String},
      size: {type: Number},
      precio: {type: Number},
      user: {type: String,required: true }
    },{
      timestamps: true
    
    });

module.exports = model('Note', NoteSchema);