import { CATEGORIES } from '../constants';

/** Initial state for the categories */
const initialState = {
    categories: {},
    loading: false,
    error: false,
  };

/** Reducer for handling different categories action types */
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES.LOAD:
            return {
                ...state,
                loading: true,
                categories: null,
                error: false
            };
        case CATEGORIES.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.categories,
                error: false
            };
        case CATEGORIES.LOAD_FAIL:
            return {
                ...state,
                loading: false,
                categories: null,
                error: true
            };
        default:
            return state;
    }
};

export default categoriesReducer;
