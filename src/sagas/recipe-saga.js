import { put, call, takeEvery } from 'redux-saga/effects';
import { setRecipe, setRecipeLoadError } from '../actions/recipes-details-actions';
import { RECIPE_DETAILS } from '../constants';
import RecipeService from '../services/recipe';

/** Worker saga for handling RECIPE_DETAILS.LOAD action */
export function* handleRecipeLoad(action) {
  try {
    /** service call for loading recipe based on selected recipe id */
    const data  = yield call(RecipeService.getRecipeById, action.recipeId);

    /** call setRecipe action creator for setting fetched recipe in the store */
    yield put(setRecipe(data));

  } catch (e) {

    /** call setRecipeLoadError action creator for setting error in case service call fails */
    yield put(setRecipeLoadError(e));
  }
}

/** Watcher saga for RECIPE_DETAILS.LOAD action */
export default function* watchRecipesLoad() {
  yield takeEvery(RECIPE_DETAILS.LOAD, handleRecipeLoad);
}
