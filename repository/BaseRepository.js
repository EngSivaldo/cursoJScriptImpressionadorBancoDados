import pool from "./db.js";

class BaseRepository {
  async getAll(table) {
    try {
      const results = (await pool.query(`SELECT * FROM ${table}`)).rows;
      console.log("Resultados da consulta ao banco de dados:", results);
      return results;
    } catch (error) {
      console.error("Erro ao consultar o banco de dados:", error);
      throw error;
    }
  }
  async getById(table, id) {
    try {
      const queryText = `SELECT * FROM ${table} WHERE ID = $1`;
      const result = (await pool.query(queryText, [id])).rows[0];
      return result;
      
    } catch (error) {
      
    }
  }

}

export default BaseRepository;