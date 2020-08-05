import { put, call, takeEvery } from 'redux-saga/effects';
import { setRecipes, setRecipesLoadError } from '../actions/recipes-actions';
import { RECIPES } from '../constants';
import RecipesService from '../services/recipes';

/** Worker saga for handling RECIPES.LOAD action */
export function* handleRecipesLoad(action) {
  try {
    /** service call for loading recipes based on selected category id */
    const data = yield call(RecipesService.getRecipesByCategoryId, action.categoryId);

    /** call setRecipes action creator for setting fetched recipes in the store */
    yield put(setRecipes(data));
  } catch (error) {

    /** call setRecipesLoadError action creator for setting error in case service call fails */
    yield put(setRecipesLoadError(error));
  }
}

/** Watcher saga for RECIPES.LOAD action */
export default function* watchRecipesLoad() {
  yield takeEvery(RECIPES.LOAD, handleRecipesLoad);
}
