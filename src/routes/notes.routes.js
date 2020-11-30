const {Router} = require('express');
const router = Router();

const { renderNoteForm,
        createNewNote,
        renderNotas,
        renderEditForm,
        updateNotes,
        deleteNotes} = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/validacion');


//*Añadir un nota
router.get('/notes/add',isAuthenticated, renderNoteForm)
router.post('/notes/new-note',isAuthenticated, createNewNote)

//*Obtenet todas las notas
router.get('/notes',isAuthenticated, renderNotas)
// router.get('/productos/new-productos', renderProductos)
// router.get('index', renderProductosIndex)

//*Edit notas
//router.get('/notes/edit/:id', renderEditForm) //*Mostrar el formulario envia los datos
//router.put('/notes/edit/:id', updateNotes) //*Autualizar los datos resive los datos

router.get("/notes/edit/:id",isAuthenticated, renderEditForm);
router.put("/notes/edit-note/:id",isAuthenticated, updateNotes);

//*Perfil del producto
router.get('/note/:id', (req, res) => {
    res.send('Perfil del producto');
})

//*Eliminar
//router.delete('/notes/delete/:id', deleteNotes)
router.delete('/notes/delete/:id',isAuthenticated, deleteNotes);

//TODO get ->Obtener
//TODO post ->Crear
//TODO put ->Actaulizar

module.exports = router