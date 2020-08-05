import React from 'react';
import { mount } from 'enzyme';
import Pagination from '../pagination/pagination';
import '../../setupTests';

it('should render correctly <Pagination>', () => {
  const fakeProps = {
    postsPerPage: 5,
    totalPosts: 10,
    paginate: () => {},
    currentPage: 1,
  };
  const wrapper = mount(<Pagination {...fakeProps}/>);
  expect(wrapper).toMatchSnapshot();
});

it('should change page on action prev and next on prev and next button click', () => {
  const fakeProps = {
    postsPerPage: 5,
    totalPosts: 10,
    paginate: () => {},
    currentPage: 1,
  };

  const element = mount(
    <Pagination {...fakeProps} />
  );
  expect(element.find('#nextPage')).toHaveLength(1);
  expect(element.find('#nextPage')).toHaveLength(1);
  const nextPage = element.find('#nextPage');
  const prevPage = element.find('#prevPage');
  expect(element.find('#currentPage')).toHaveLength(1);
  nextPage.simulate('click')
  expect(element.find('#currentPage')).toHaveLength(1);
  expect(element.find('#currentPage').filterWhere((item) => {
    return item.prop('value') === 2;
  })).toHaveLength(1);
  prevPage.simulate('click');
  expect(element.find('#currentPage').filterWhere((item) => {
    return item.prop('value') === 1;
  })).toHaveLength(1);
});
