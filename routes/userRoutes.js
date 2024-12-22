import { Router } from "express";
import BaseRepository from '../repository/BaseRepository.js';


const router = Router();

router.get("/", async (req, res) => {
  console.log("Recebida requisição para /users");
  try {
    const result = await new BaseRepository().getAll("users");
    console.log("Resultado da consulta:", result);
    res.status(200).send(result);
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    res.status(500).send("Internal Server Error");
  }
});


export default router;