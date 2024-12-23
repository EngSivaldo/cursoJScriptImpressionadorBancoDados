import pool from "./db.js"; // Importa a conexão com o banco de dados

class BaseRepository {
  // Método para obter todos os registros de uma tabela
  async getAll(table) {
    try {
      const results = (await pool.query(`SELECT * FROM ${table}`)).rows; // Executa a consulta SQL para obter todos os registros da tabela
      console.log("Resultados da consulta ao banco de dados:", results); // Loga os resultados no console
      return results; // Retorna os resultados
    } catch (error) {
      console.error("Erro ao consultar o banco de dados:", error); // Loga o erro no console
      throw error; // Lança o erro para ser tratado externamente
    }
  }

  // Método para obter um registro pelo ID
  async getById(table, id) {
    try {
      const queryText = `SELECT * FROM ${table} WHERE ID = $1`; // Define a consulta SQL com um parâmetro para o ID
      const result = (await pool.query(queryText, [id])).rows[0]; // Executa a consulta passando o ID como parâmetro
      return result; // Retorna o resultado
    } catch (error) {
      console.error("Erro ao consultar o banco de dados:", error); // Loga o erro no console
      throw error; // Lança o erro para ser tratado externamente
    }
  }
}

export default BaseRepository; // Exporta a classe BaseRepository