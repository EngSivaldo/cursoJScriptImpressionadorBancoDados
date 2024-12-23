import pool from "./db.js";

class BaseRepository {
  async getAll(table, colunmsArray) {
    try {
      const results = (await pool.query(`SELECT ${colunmsArray.join()} FROM ${table}`)).rows;
      console.log("Resultados da consulta ao banco de dados:", results);
      return results;
    } catch (error) {
      console.error("Erro ao consultar o banco de dados:", error);
      throw error;
    }
  }

  async getById(table,colunmsArray, id) {
    try {
      const queryText = `SELECT ${colunmsArray.join()} FROM ${table} WHERE ID = $1`;
      const result = (await pool.query(queryText, [id])).rows[0];
      return result;
    } catch (error) {
      console.error("Erro ao consultar o banco de dados:", error);
      throw error;
    }
  }
}

export default BaseRepository;