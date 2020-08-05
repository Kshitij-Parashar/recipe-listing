/** Object containing action types constants for categories */
const CATEGORIES = {
    LOAD: 'CATEGORIES_LOAD',
    LOAD_SUCCESS: 'CATEGORIES_LOAD_SUCCESS',
    LOAD_FAIL: 'CATEGORIES_LOAD_FAIL',
};

/** Object containing action types constants for category */
const CATEGORY = {
    SET_CATEGORY: 'SET_CATEGORY',
};

/** Object containing action types constants for recipes */
const RECIPES = {
    LOAD: 'RECIPES_LOAD',
    LOAD_SUCCESS: 'RECIPES_LOAD_SUCCESS',
    LOAD_FAIL: 'RECIPES_LOAD_FAIL',
};

/** Object containing action types constants for recipe details */
const RECIPE_DETAILS = {
    LOAD: 'RECIPE_DETAILS_LOAD',
    LOAD_SUCCESS: 'RECIPE_DETAILS_LOAD_SUCCESS',
    LOAD_FAIL: 'RECIPE_DETAILS_LOAD_FAIL',
};

/** API URL for fetching the data */
const API_URL = 'https://www.themealdb.com/api/json/v1/1/';


export { CATEGORIES, RECIPES, RECIPE_DETAILS, CATEGORY, API_URL };
