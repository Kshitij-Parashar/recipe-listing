import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadRecipes } from '../../actions/recipes-actions';
import { setCategory } from '../../actions/category-actions';
import RecipeList from './recipe-list/recipe-list';
import Pagination from '../pagination/pagination';
import PropTypes from 'prop-types';
import './filtered-recipes.css';

/** Represents a Recipe List container component which load on when user selects a category*/
const RecipeByCategory = (props) => {
  const { goBack } = useHistory();
  const { filter } = useParams();
  const [recipes, setRecipes] = useState([]);

  /** Set number of items(recipes) to display on the page */
  const [recipesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  /** Call action creator setCategory and loadCategories when component mounts */
  useEffect(() => {
    props.setCategory(filter);
    props.loadRecipes(filter);
  }, [filter]);

  /** Set recipes when recipes from the props changes */
  useEffect(() => {
    if (props.recipes && props.recipes.meals) {
      setRecipes(props.recipes.meals);
    }
  }, [props, recipes]);

  /** Function to navigate to categories page */
  const goBackToPrevLoc = () => {
    goBack();
  };

 /** Get current recipes based on current page */
  const indexOfLastCategory = currentPage * recipesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - recipesPerPage;
  const currentRecipes = recipes.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  /** Change page based on page passed from pagination component */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="heading center">{filter} Recipes</h1>
      <div className="recipes-by-category">
        <button className="back-button" onClick={goBackToPrevLoc}>
          {'<< '}Back
        </button>
        <RecipeList
          recipes={currentRecipes}
          loading={props.loading}
          error={props.error}
        />
        {recipesPerPage < recipes.length && (
          <Pagination
            currentPage={currentPage}
            postsPerPage={recipesPerPage}
            totalPosts={recipes.length}
            paginate={paginate}
          />
        )}
      </div>
    </>
  );
};

/** Component will receive: prop recipes with loading, recipes, and error properties */
const mapStateToProps = ({ recipes }) => ({
  loading: recipes.loading,
  recipes: recipes.recipes,
  error: recipes.error,
});

/** Map action creators setCategory and loadRecipes to props */
const mapDispatchToProps = (dispatch) => ({
  loadRecipes: (categoryId) => dispatch(loadRecipes(categoryId)),
  setCategory: (categoryId) => dispatch(setCategory(categoryId)),
});

RecipeByCategory.propTypes = {
  recipes: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  loadRecipes: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeByCategory);
