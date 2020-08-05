import { RECIPES } from '../constants';

/** Initial state for the recipes */
const initialState = {
    recipes: {},
    loading: false,
    error: false,
  };

/** Reducer for handling different recipes action types */
const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECIPES.LOAD:
            return {
                ...state,
                loading: true,
                recipes: null,
                error: false
            };
        case RECIPES.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                recipes: action.recipes,
                error: false
            };
        case RECIPES.LOAD_FAIL:
            return {
                ...state,
                loading: false,
                recipes: null,
                error: true
            };
        default:
            return state;
    }
};

export default recipesReducer;
