import BaseRepository from "./BaseRepository.js"; // Importa a classe BaseRepository

// Classe de produtos que estende BaseRepository
class ProductRepository extends BaseRepository {
  // Método para obter todos os produtos
  async getAll() {
    try {
      const results = await super.getAll('products', ['id','name', 'size','price_in_size']); // Certifique-se de que o nome da tabela está correto
      return results; // Retorna os resultados
    } catch (error) {
      throw error; // Lança um erro se algo der errado
    }
  }

  // Método para obter um produto pelo ID
  async getById(id) {
    try {
      const result = await super.getById('products',  ['id','name', 'size','price_in_size'], id); // Certifique-se de que o nome da tabela está correto
      return result; // Retorna o resultado
    } catch (error) {
      throw error; // Lança um erro se algo der errado
    }
  }
}

export default ProductRepository; // Exporta a classe ProductRepository