const notesCtrl = {};

const Note = require('../models/Note'); //?importando el modelo de colection

notesCtrl.renderNoteForm=(req, res) =>{
    //*res.send('Añadir Nota');
    //console.log(req.user.id)
    res.render('notes/new-note')
};

notesCtrl.createNewNote = async (req, res) =>{
   // console.log(req.body) //*muetra los datos
   const {title, description} = req.body;//?obtner los datos
   const newNote = new Note({title , description});
   newNote.user = req.user.id;
   //console.log(newNote); //?muetra
   await newNote.save(); //guarda el objeto dentro de mongoDB
   req.flash('success_msg', 'Producto Agregado Con Exito');//*se utiliza como una variable
   res.redirect("/notes");
    //res.send('Nueva Nota');
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