const { Router } = require("express");
const router = Router();

const Cart = require("../models/Cart");
const Order = require("../models/Order");

const {
  renderNoteForm,
  createNewNote,
  renderNotas,
  renderEditForm,
  renderNotesFinder,
  updateNotes,
  deleteNotes,
  status,
  buscador,
} = require("../controllers/notes.controller");

const { isAuthenticated } = require("../helpers/validacion");

//*Añadir un nota
router.get("/notes/add", isAuthenticated, renderNoteForm);
router.post("/notes/new-note", isAuthenticated, createNewNote);

//*Obtenet todas las notas
router.get("/notes", isAuthenticated, renderNotas);


router.get("/notes/edit/:id", isAuthenticated, renderEditForm);
router.put("/notes/edit-note/:id", isAuthenticated, updateNotes);

router.get("/notes/notesFinder", renderNotesFinder);

//*Perfil del producto
router.get("/note/:id", (req, res) => {
  res.send("Perfil del producto");
});

//*Eliminar
router.delete("/notes/delete/:id", isAuthenticated, deleteNotes);

//TODO get ->Obtener
//TODO post ->Crear
//TODO put ->Actaulizar

module.exports = router;
