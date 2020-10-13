const {Router} = require('express');
const router = Router();

const { renderNoteForm,
        createNewNote,
        renderNotas,
        renderEditForm,
        updateNotes,
        deleteNotes
} = require('../controllers/notes.controller')

//*Añadir un nota
router.get('/notes/add', renderNoteForm)
router.post('/notes/new-note', createNewNote)

//*Obtenet todas las notas
router.get('/notes', renderNotas)


//*Edit notas
//router.get('/notes/edit/:id', renderEditForm) //*Mostrar el formulario envia los datos
//router.put('/notes/edit/:id', updateNotes) //*Autualizar los datos resive los datos

router.get("/notes/edit/:id", renderEditForm);
router.put("/notes/edit-note/:id", updateNotes);



//*Eliminar
//router.delete('/notes/delete/:id', deleteNotes)
router.delete('/notes/delete/:id', deleteNotes);

//TODO get ->Obtener
//TODO post ->Crear
//TODO put ->Actaulizar

module.exports = router