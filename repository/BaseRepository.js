import { Client } from "pg";
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

  async  insertOne(table, columnsArray, valueArray) {
    // Conecta ao cliente do pool de conexões
    const client = await pool.connect();
    try {
      // Cria um array de placeholders ($1, $2, etc.) para os valores
      let flagsStringArray = Array.from((new Array(columnsArray.length)).keys()).map((el) => `$${el + 1}`);
      
      // Cria a string da consulta SQL para inserção
      const queryText = `INSERT INTO ${table} (${columnsArray.join()}) VALUES (${flagsStringArray.join()})`;
  
      // Inicia uma transação
      await client.query('BEGIN TRANSACTION');
      
      // Executa a consulta de inserção com os valores fornecidos
      await client.query(queryText, valueArray);
      
      // Confirma a transação
      await client.query('COMMIT');
    
    } catch (error) {
      // Em caso de erro, reverte a transação
      await client.query('ROLLBACK');
      throw error;
    } finally {
      // Libera o cliente de volta ao pool de conexões
      client.release();
    }
  }


}

export default BaseRepository;