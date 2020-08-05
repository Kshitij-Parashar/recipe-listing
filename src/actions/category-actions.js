import { CATEGORY } from '../constants';

/**
 * Action creator for setting selected category in store
 * @param {string} categoryId - The id of the category selected.
 */
const setCategory = (categoryId) => ({
  type: CATEGORY.SET_CATEGORY,
  categoryId
});

export { setCategory };
