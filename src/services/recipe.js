import api from '../services/api';

/** Recipe Service with getRecipeById to fetch recipe details */
export default class RecipeService {
  static async getRecipeById(id) {
    try {
      const response = await api.get(`lookup.php?i=${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
