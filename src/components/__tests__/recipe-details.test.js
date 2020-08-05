import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import RecipeDetailsContainer from '../recipe-details/recipe-details-container';
import '../../setupTests';

it('should render correctly <RecipeDetailsContainer>', () => {
  const historyMock = {
    goBack: jest.fn(),
    listen: jest.fn(),
    location: { pathname: '' },
  };
  const mockStore = configureStore();

  const store = mockStore({
    recipe: {
      meals: [
        {
          idMeal: '52874',
          strMeal: 'Beef and Mustard Pie',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
        },
      ],
      loading: false,
      error: false,
    },
  });
  const wrapper = mount(
    <Provider store={store}>
      <Router history={historyMock}>
        <RecipeDetailsContainer />
      </Router>
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
