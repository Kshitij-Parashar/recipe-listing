import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from '../recipe-list-item/recipe-list-item';

/**
 * Represents a Recipe list component getting recipes from container component
 * @param {object} props - Receives recipes and loading as props 
 */
const RecipeList = (props) => {
    if (props.loading) {
      return <h2>Loading recipes...</h2>;
    }
    if (props.recipes && props.recipes.length > 0) {
      return props.recipes.map((recipe, index) => (
        <RecipeListItem
          key={recipe.idMeal}
          id={recipe.idMeal}
          recipeName={recipe.strMeal}
          img={recipe.strMealThumb}
        />
      ));
    }
    return <h2>No recipes found.</h2>;
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default RecipeList;
