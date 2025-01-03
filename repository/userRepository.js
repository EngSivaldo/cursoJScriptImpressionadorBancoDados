import BaseRepository from "./BaseRepository.js"; // Importa a classe BaseRepository

class UserRepository extends BaseRepository {
  async getAll() {
    try {
      const results = await super.getAll('users', ['id','name','surname','email']);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const result = await super.getById('users', ['id','name','surname','email'], id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async insertOne(valueArray) {
    try {
      await super.insertOne('users', ['name', 'surname', 'email'], valueArray)
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository; // Exporta a classe UserRepository