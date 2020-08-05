import { all } from 'redux-saga/effects';

import  categoriesSaga  from './categories-saga';
import  recipesSaga  from './recipes-saga';
import  recipeSaga  from './recipe-saga';

export default function* rootSaga() {
  yield all([categoriesSaga(), recipesSaga(), recipeSaga()]);
}
