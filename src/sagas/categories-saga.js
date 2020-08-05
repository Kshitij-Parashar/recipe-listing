import { put, call, takeEvery } from 'redux-saga/effects';
import { setCategories, setCategoriesError } from '../actions/categories-actions';
import { CATEGORIES } from '../constants';
import CategoriesService from '../services/categories';

/** Worker saga for handling CATEGORIES.LOAD action */
export function* handleCategoriesLoad() {
    try {
        /** service call for loading categories */
        const data = yield call(CategoriesService.getCategories);
        
         /** call setCategories action creator for setting fetched categories in the store */
        yield put(setCategories(data));
    } catch (error) {

         /** call setCategoriesError action creator for setting error in case service calls fails */
        yield put(setCategoriesError(error));
    }
}

/** Watcher saga for CATEGORIES.LOAD action */
export default function* watchCategoriesLoad() {
    yield takeEvery(CATEGORIES.LOAD, handleCategoriesLoad);
}
