const { Schema, model } = require('mongoose');  //? Colection de Usuarios
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });

userSchema.methods.encryptPassword = async (password)=>{ //?Encriptando contraseñas
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);//*devuelve la contraseña cifrada
};


userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = model('User', userSchema);





