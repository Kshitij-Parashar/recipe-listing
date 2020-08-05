import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import CategoryGrid from '../categories';
import '../../setupTests';

it('should render correctly <CategoryGrid>', () => {
  const mockStore = configureStore();
  const store = mockStore({
    categories: {
      categories: {
        idCategory: '1',
        strCategory: 'Beef',
        strCategoryDescription:
          'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
        strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
      },
      loading: false,
      error: false,
    },
  });
  const wrapper = mount(
    <Provider store={store}>
      <CategoryGrid />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
