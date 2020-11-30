const notesCtrl = {};

const Note = require('../models/Note'); //?importando el modelo de colection de la bd

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const fsExtra = require('fs-extra');

notesCtrl.renderNoteForm=(req, res) =>{
    //*res.send('Añadir producto');
    //console.log(req.user.id)
    res.render('notes/new-note')
};

notesCtrl.createNewNote = async (req, res) =>{
     const { title, description, precio, image, path, originalname, imgURL, public_id} = req.body;
    //  console.log(req.body)
     const errors = [];
     if (!title) {
       errors.push({ text: "Escribe un título." });
     }
     if (!description) {
       errors.push({ text: "Escriba una descripción " });
     }
     if (!precio) {
       errors.push({ text: "Ingrese una cantidad " });
     }
      // if (!image) {
      //   errors.push({ text: "Ingrese una imagen " });
      // }

     if (errors.length > 0) {
       res.render("notes/new-note", {
         errors,
         title,
         description,
         precio,
       });
     } else {
      //  console.log(req.file.path)
      const resultado = await cloudinary.v2.uploader.upload(req.file.path);
      const newNote = new Note({ title,
        description,
        precio,
        image,
        path,
        originalname: req.file.originalname,
        originalname: resultado.originalname,
        imgURL: resultado.url,
        public_id: resultado.public_id });
       
        console.log(newNote)
       newNote.user = req.user.id;
       await newNote.save();//?Guardando en la base toda la collections

       await fsExtra.unlink(req.file.path) //?Eliminando la img de la carpeta uploads
       req.flash("success_msg", "Producto agregado con éxito");//? msn de de exito
       res.redirect("/notes");

        // res.redirect("index");
      //console.log(req.file);
     }

};

notesCtrl.renderNotas= async (req, res) =>{ //?Consutar a la base de datos
    const notes = await Note.find({ user: req.user.id })
    .sort({ createdAt: -1 })
    .lean();//?busca el arreglo
    res.render('notes/all-notes', { notes }) //?pasalos objetos/muestra en pantalla
    // res.render('index', { notes }) //?pasa los objetos/muestra en pantalla
    //  console.log(notes);
  };

   notesCtrl.renderProductos = async (req, res) => {
     const notes = await Note.find()
     .sort({ createdAt: -1 })
     .lean();
     res.render('productos/new-productos', {notes})
      // console.log(products)
   }

   notesCtrl.renderProductosIndex = async (req, res) => {
    const notes = await Note.find()
    .sort({ createdAt: -1 })
    .lean();
    res.render('index', {notes})
     // console.log(products)
  }


//?Renderizado para editar productos
notesCtrl.renderEditForm = async (req, res) => {
   // res.send('Edit form')
   const note = await Note.findById(req.params.id).lean(); //buscando en la base el ID
   if(note.user != req.user.id){
    req.flash('error_msg', "No esta Autorizado")   
    return res.redirect('/notes');

   }
  // console.log(note)
   res.render('notes/edit-note', { note }); //pasando el valor
};

//*Actualizar producto
/*
notesCtrl.updateNotes = async (req, res) => {//console.log(req.body)
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.parmas.id, {title, description}).lean()
    res.redirect("/notes");
};*/

notesCtrl.updateNotes = async (req, res) => {
    const { title, description, precio, imgURL } = req.body;
    const resultado = await cloudinary.v2.uploader.upload(req.file.path);
    const note =  await Note.findByIdAndUpdate(req.params.id);//?Actualiza por ID
    const result = await cloudinary.v2.uploader.destroy(note.public_id);
    // console.log(result);
    
    await Note.findByIdAndUpdate(req.params.id, { 
      title, 
      description, 
      precio, 
      imgURL: resultado.url,
      public_id: resultado.public_id
       });

       await fsExtra.unlink(req.file.path)
    req.flash("success_msg", "Producto Actualizado Con Exito");
    res.redirect("/notes");
  };



//*Eliminar producto

/*notesCtrl.deleteNotes=(req, res) => {
    res.render('Eliminar Notas')
};*/

notesCtrl.deleteNotes = async (req, res) => {
   const note =  await Note.findByIdAndDelete(req.params.id);//?Elimina por ID
    const result = await cloudinary.v2.uploader.destroy(note.public_id);
   // console.log(result);
    req.flash("success_msg", "Producto Eliminado Con Exito");
    res.redirect("/notes");
  };




module.exports = notesCtrl;
