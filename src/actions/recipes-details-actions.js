import { RECIPE_DETAILS } from '../constants';

/**
 * Action creator for loading recipe details for selected recipe id
 * @param {string} recipeId - Selected recipe id
 */
const loadRecipe = (recipeId) => ({
  type: RECIPE_DETAILS.LOAD,
  recipeId
});

/**
 * Action creator for setting recipe details for selected recipe id on successful load
 * @param {object} recipes - Recipe fetched on successful load.
 */
const setRecipe = recipe => ({
  type: RECIPE_DETAILS.LOAD_SUCCESS,
  recipe,
});

/**
 * Action creator for setting error when load fails
 * @param {error} error - Error returned from the api call
 */
const setRecipeLoadError = error => ({
  type: RECIPE_DETAILS.LOAD_FAIL,
  error,
});

export { loadRecipe, setRecipe, setRecipeLoadError };
