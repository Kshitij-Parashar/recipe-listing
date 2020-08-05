import api from '../services/api';

/** Recipes Service with getRecipesByCategoryId to fetch recipes */
export default class RecipesService {
  static async getRecipesByCategoryId(id) {
    try {
      const response = await api.get(`filter.php?c=${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
