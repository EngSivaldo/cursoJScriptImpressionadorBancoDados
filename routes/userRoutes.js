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

router.post('/', async (req, res) => {
  const { body } = req;
  const columnsArray = ['name', 'surname', 'email'];
  const valuesArray = columnsArray.reduce((acc, columnName) => {
    acc.push(body[columnName]);
    return acc;
  }, []);

  try {
    await new UserRepository().insertOne(valuesArray);
    res.status(200).send({ message: 'Dados enviados com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    res.status(500).send({ message: 'Erro ao enviar dados para o banco de dados.' });
  }
});

export default router;
