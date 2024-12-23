import { Router } from "express";
import UserRepository from '../repository/userRepository.js';

const router = Router();
const userRepository = new UserRepository(); // Instância de UserRepository

// Busca todos os usuários
router.get("/", async (req, res) => {
  console.log("Recebida requisição para /users");
  try {
    const result = await userRepository.getAll(); // Usar userRepository
    console.log("Resultado da consulta:", result);
    res.status(200).send(result);
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Busca pelo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userRepository.getById(id); // Usar userRepository
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;