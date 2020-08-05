import { combineReducers } from 'redux';

import categoriesReducer from './categories-reducer';
import categoryReducer from './category-reducer';
import recipeReducer from './recipe-reducer';
import recipesReducer from './recipes-reducer';

/** Root reducer combining all the other reducers */
const rootReducer = combineReducers({
    categories: categoriesReducer,
    category:categoryReducer,
    recipes:recipesReducer,
    recipe: recipeReducer,
});

export default rootReducer;
