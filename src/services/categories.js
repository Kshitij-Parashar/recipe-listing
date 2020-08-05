import api from '../services/api';

/** Category Service with getCategories to fetch categories */
export default class CategoriesService {
  static async getCategories() {
    try {
      const response = await api.get(`categories.php`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
