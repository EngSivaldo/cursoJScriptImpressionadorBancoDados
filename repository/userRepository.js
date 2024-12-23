import BaseRepository from "./BaseRepository.js"; // Importa a classe BaseRepository

class UserRepository extends BaseRepository {
  async getAll() {
    try {
      const results = await super.getAll('users');
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const result = await super.getById('users', id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository; // Exporta a classe UserRepository