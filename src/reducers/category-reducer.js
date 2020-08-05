import { CATEGORY } from '../constants';

/** Initial state for selected category */
const initialState = {
    categoryId: ''
  };

/** Reducer for handling selected category  */
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY.SET_CATEGORY:
            return {
                ...state,
                category: action.categoryId,
            };
        default:
            return state;
    }
};

export default categoryReducer;
