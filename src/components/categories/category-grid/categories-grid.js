import React from 'react';
import CategoryCard from '../category-card/category-card';
import PropTypes from 'prop-types';

/**
 * Represents a Category grid component getting catergories from container component
 * @param {object} props - Receives categories and loading as prop
 */
const CategoryGrid = ({ categories, loading }) => {
  if (loading) {
    return <h2>Loading categories...</h2>;
  }

  if (categories && categories.length > 0) {
    return categories.map((category, index) => (
      <CategoryCard
        key={category.idCategory}
        categoryName={category.strCategory}
        id={category.idCategory}
        img={category.strCategoryThumb}
        description={category.strCategoryDescription}
      />
    ));
  }
  return <h2>No category found.</h2>;
};

CategoryGrid.propTypes = {
  categories: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CategoryGrid;
