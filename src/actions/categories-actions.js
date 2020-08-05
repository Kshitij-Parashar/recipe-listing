import { CATEGORIES } from '../constants';

/** Action creator for loading categories */
const loadCategories = () => ({
  type: CATEGORIES.LOAD,
});

/**
 * Action creator for setting recipes for selected category in store
 * @param {Array} categories - Categories fetched on successful load.
 */
const setCategories = categories => ({
  type: CATEGORIES.LOAD_SUCCESS,
  categories,
});

/**
 * Action creator for setting error when load fails
 * @param {error} error - Error returned from the api call
 */
const setCategoriesError = (error) => ({
  type: CATEGORIES.LOAD_FAIL,
  error,
});

export { loadCategories, setCategories, setCategoriesError };
