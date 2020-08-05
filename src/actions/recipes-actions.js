import { RECIPES } from '../constants';

/**
 * Action creator for loading recipes for selected category in store
 * @param {string} categoryId - The id of the category selected.
 */
const loadRecipes = (categoryId) => ({
  type: RECIPES.LOAD,
  categoryId,
});

/**
 * Action creator for setting recipes for selected category on successful load
 * @param {Array} recipes - Recipes fetched on successful load.
 */
const setRecipes = (recipes) => ({
  type: RECIPES.LOAD_SUCCESS,
  recipes,
});

/**
 * Action creator for setting error when load fails
 * @param {error} error - Error returned from the api call
 */
const setRecipesLoadError = (error) => ({
  type: RECIPES.LOAD_FAIL,
  error,
});

export { loadRecipes, setRecipes, setRecipesLoadError };
