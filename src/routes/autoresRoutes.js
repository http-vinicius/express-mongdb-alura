import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get('/autores', AutorController.listarAutores)
  .get('/autores/:id', AutorController.listarAutoresPorId)
  .post('/autores', AutorController.cadastraAutores)
  .put('/autores/:id', AutorController.atualizarAutores)
  .delete('/autores/:id', AutorController.excluirAutores)

export default router;