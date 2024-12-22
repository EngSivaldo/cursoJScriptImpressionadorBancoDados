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
}

export default BaseRepository;