import { runSaga } from 'redux-saga';

import { handleRecipeLoad } from '../recipe-saga';
import RecipeService from '../../services/recipe'; // we'll mock the getRecipes service
import {
  setRecipe,
  setRecipeLoadError,
} from '../../actions/recipes-details-actions';

it('should load and handle recipe in case of success', async () => {
  /** we push all dispatched actions to make assertions easier
     and our tests less brittle */

  const fakeId = '42';
  const dispatchedActions = [];

  /** we don't want to perform an actual api call in our tests
     so we will mock the getRecipeById service call with jest
     this will mutate the dependency which we may reset if other tests
     are dependent on it */

  const mockedRecipe = { id: '1', name: 'chicken sandwich' };
  RecipeService.getRecipeById = jest.fn(() => Promise.resolve(mockedRecipe));

  const fakeStore = {
    dispatch: (action) => dispatchedActions.push(action),
  };

  /** wait for saga to complete */

  await runSaga(fakeStore, handleRecipeLoad, fakeId).done;

  expect(RecipeService.getRecipeById.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setRecipe(mockedRecipe));
});

it('should load and handle the recipes error in case of failure', async () => {
  const dispatchedActions = [];
  const fakeId = '42';

  /** we simulate an error by rejecting the promise
     then we assert if our saga dispatched the action(s) correctly */

  const error = 'API server is down';

  RecipeService.getRecipeById = jest.fn(() => Promise.reject(error));

  const fakeStore = {
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleRecipeLoad, fakeId).done;

  expect(RecipeService.getRecipeById.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setRecipeLoadError(error));
});
