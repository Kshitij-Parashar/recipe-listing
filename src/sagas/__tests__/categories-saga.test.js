import { runSaga } from 'redux-saga';

import { handleCategoriesLoad } from '../categories-saga';
import CategoriesService from '../../services/categories'; // we'll mock the getCategories service
import {
  setCategories,
  setCategoriesError,
} from '../../actions/categories-actions';

it('should load and handle catgories in case of success', async () => {
  /**  we push all dispatched actions to make assertions easier and our tests less brittle */
  const dispatchedActions = [];

  /**  we don't want to perform an actual api call in our tests
    so we will mock the getCategories service call with jest
    this will mutate the dependency which we may reset if other tests
    are dependent on it */
  const mockedCategories = ['category1', 'category2'];
  CategoriesService.getCategories = jest.fn(() =>
    Promise.resolve(mockedCategories)
  );

  const fakeStore = {
    dispatch: (action) => dispatchedActions.push(action),
  };

  /** wait for saga to complete */
  await runSaga(fakeStore, handleCategoriesLoad).done;
  expect(CategoriesService.getCategories.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setCategories(mockedCategories));
});

it('should handle image load errors in case of failure', async () => {
  const dispatchedActions = [];

  /** we simulate an error by rejecting the promise
   then we assert if our saga dispatched the action(s) correctly */
  const error = 'API server is down';
  CategoriesService.getCategories = jest.fn(() => Promise.reject(error));

  const fakeStore = {
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleCategoriesLoad).done;

  expect(CategoriesService.getCategories.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setCategoriesError(error));
});
