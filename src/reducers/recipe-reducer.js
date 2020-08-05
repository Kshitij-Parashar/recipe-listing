import { RECIPE_DETAILS } from '../constants';

/** Initial state for the selected recipe */
const initialState = {
    recipe: {},
    loading: false,
    error: false,
  };

/** Reducer for handling different selected recipe action types */
const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECIPE_DETAILS.LOAD:
            return {
                ...state,
                loading: true,
                recipe: null,
                error: false
            };
        case RECIPE_DETAILS.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                recipe: action.recipe,
                error: false
            };
        case RECIPE_DETAILS.LOAD_FAIL:
            return {
                ...state,
                loading: false,
                recipe: null,
                error: true
            };
        default:
            return state;
    }
};

export default recipeReducer;
