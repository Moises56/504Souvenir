const notesCtrl = {};

const Note = require('../models/Note'); //?importando el modelo de colection de la bd

notesCtrl.renderNoteForm=(req, res) =>{
    //*res.send('Añadir producto');
    //console.log(req.user.id)
    res.render('notes/new-note')
};


notesCtrl.createNewNote = async (req, res) =>{
     const { title, description, precio, image, path} = req.body;
   
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
         image,
         path
       });
     } else {
       const newNote = new Note({ title, description, precio, image, path });
       newNote.path = 'img/uploads/'+req.file.filename;
       newNote.user = req.user.id;

       await newNote.save();
       req.flash("success_msg", "Producto agregado con éxito");
       res.redirect("/notes");
      //console.log(req.file);

     }
    
//     console.log(req.body) //*muetra los datos
//     const {title, description} = req.body;//?obtner los datos
//     const newNote = new Note({title , description});
//     newNote.user = req.user.id;
//    console.log(newNote); //?muetra
//     await newNote.save(); //guarda el objeto dentro de mongoDB
//     req.flash('success_msg', 'Producto Agregado Con Exito');//*se utiliza como una variable
//     res.redirect("/notes");
//     res.send('Nueva Nota');


};


notesCtrl.renderNotas= async (req, res) =>{ //?Consutar a la base de datos
    const notes = await Note.find({ user: req.user.id })
    .sort({ createdAt: -1 })
    .lean();//?busca el arreglo 
    
    res.render('notes/all-notes', { notes }) //?pasalos objetos/muestra en pantalla
};

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
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash("success_msg", "Producto Actualizado Con Exito");
    res.redirect("/notes");
  };


//*Eliminar producto

/*notesCtrl.deleteNotes=(req, res) => {
    res.render('Eliminar Notas')
};*/

notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);//?Elimina por ID
    req.flash("success_msg", "Producto Eliminado Con Exito");
    res.redirect("/notes");
  };




module.exports = notesCtrl;
