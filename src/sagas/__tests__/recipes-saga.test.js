import { runSaga } from 'redux-saga';

import { handleRecipesLoad } from '../recipes-saga';
import RecipesService from '../../services/recipes'; // we'll mock the getRecipes service
import { setRecipes, setRecipesLoadError } from '../../actions/recipes-actions';

it('should load and handle recipes in case of success', async () => {
  /** we push all dispatched actions to make assertions easier
     and our tests less brittle */

  const fakeId = '42';
  const dispatchedActions = [];

  /** we don't want to perform an actual api call in our tests
     so we will mock the getRecipes service call with jest
    this will mutate the dependency which we may reset if other tests
   are dependent on it */

  const mockedRecipes = ['recipe1', 'recipe2'];
  RecipesService.getRecipesByCategoryId = jest.fn(() =>
    Promise.resolve(mockedRecipes)
  );

  const fakeStore = {
    dispatch: (action) => dispatchedActions.push(action),
  };

  /** wait for saga to complete */

  await runSaga(fakeStore, handleRecipesLoad, fakeId).done;

  expect(RecipesService.getRecipesByCategoryId.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setRecipes(mockedRecipes));
});

it('should load and handle the recipes error in case of failure', async () => {
  const dispatchedActions = [];
  const fakeId = '42';

  /** we simulate an error by rejecting the promise
   then we assert if our saga dispatched the action(s) correctly */

  const error = 'API server is down';

  RecipesService.getRecipesByCategoryId = jest.fn(() => Promise.reject(error));

  const fakeStore = {
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleRecipesLoad, fakeId).done;

  expect(RecipesService.getRecipesByCategoryId.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setRecipesLoadError(error));
});
