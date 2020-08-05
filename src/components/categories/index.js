import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CategoryGrid from './category-grid/categories-grid';
import { loadCategories } from '../../actions/categories-actions';
import Pagination from '../pagination/pagination';
import PropTypes from 'prop-types';
import './categories-grid.css';

/** Represents a Category grid container component which loads on when user log's in */
const CategoryGridContainer = (props) => {
  const [categories, setCategories] = useState([]);

  /** Set number of items(categories) to display on the page */
  const [categoriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  /** Call action creator loadCategories when component mounts */
  useEffect(() => {
    props.loadCategories();
  }, []);

  /** Set categories when categories from the props changes */
  useEffect(() => {
    if (props.categories && props.categories.categories) {
      setCategories(props.categories.categories);
    }
  }, [props, categories]);

  /** Get current categories based on current page */
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  /** Change page based on page passed from pagination component */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="heading center">Categories</h1>
      <section className="categories">
        <CategoryGrid
          categories={currentCategories}
          loading={props.loading}
          error={props.error}
        />
      </section>
      <Pagination
        currentPage={currentPage}
        postsPerPage={categoriesPerPage}
        totalPosts={categories.length}
        paginate={paginate}
      />
    </>
  );
};

/** Component will receive: prop categories with loading, categories, and error properties */
const mapStateToProps = ({ categories }) => ({
  loading: categories.loading,
  categories: categories.categories,
  error: categories.error,
});

/** Map action creator loadCategories to props */
const mapDispatchToProps = (dispatch) => ({
  loadCategories: () => dispatch(loadCategories()),
});

CategoryGridContainer.propTypes = {
  categories: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  loadCategories: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryGridContainer);
