import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import FilteredRecipes from '../filtered-recipes/filtered-recipes';
import '../../setupTests';

it('should render correctly <FilteredRecipes>', () => {
  const historyMock = {
    goBack: jest.fn(),
    listen: jest.fn(),
    location: { pathname: '' },
  };
  const mockStore = configureStore();

  const store = mockStore({
    recipes: {
      meals: [
        {
          idMeal: '52874',
          strMeal: 'Beef and Mustard Pie',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
        },
        {
          idMeal: '52878',
          strMeal: 'Beef and Oyster pie',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
        },
      ],
      loading: false,
      error: false,
    },
  });
  const wrapper = mount(
    <Provider store={store}>
      <Router history={historyMock}>
        <FilteredRecipes />
      </Router>
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
