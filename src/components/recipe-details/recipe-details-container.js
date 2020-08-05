import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadRecipe } from '../../actions/recipes-details-actions';
import RecipeDetail from './recipe-detail/recipe-detail';
import PropTypes from 'prop-types'
import './recipe-details.css';

/** Represents a Recipe details container component which loads when user selects a recipe */
const RecipeDetailsContainer = (props) => {
  const [recipe, setRecipe] = useState(null);
  const { goBack } = useHistory();
  const { id } = useParams();

  /** Call action creator loadRecipe when component mounts based on recipe id */
  useEffect(() => {
    props.loadRecipe(id);
  }, [id]);

  /** Set recipe when recipe from the props changes */
  useEffect(() => {
    if (props.recipe && props.recipe.meals) {
      const currentRecipe = props.recipe.meals[0];
      setRecipe(parseRecipe(currentRecipe));
    }
  }, [props]);

  /** Function to navigate to recipes list page */
  const goBackToPrev = () => {
    goBack();
  };

  /** Function to parse/normalize recipe details obtained from the api */
  const parseRecipe = (currentRecipe) => {
    const recipeIngredients = [];
    for (let i = 1; i <= 20; i++) {
      if (
        currentRecipe[`strIngredient${i}`] &&
        currentRecipe[`strIngredient${i}`] !== ''
      ) {
        recipeIngredients.push({
          ingredient: currentRecipe[`strIngredient${i}`],
          quantity: currentRecipe[`strMeasure${i}`],
        });
      }
    }
    const parsedRecipe = {
      id: currentRecipe.idMeal,
      recipeName: currentRecipe.strMeal,
      category: currentRecipe.strCategory,
      img: currentRecipe.strMealThumb,
      tags: currentRecipe.strTags ? currentRecipe.strTags.split(',') : [],
      instructions: currentRecipe.strInstructions,
      video: currentRecipe.strYoutube.replace('watch?v=', 'embed/'),
      ingredients: recipeIngredients,
      origin: currentRecipe.strArea,
    };
    return parsedRecipe;
  };

  return (
    <div className="recipe-details">
      <RecipeDetail goBack={goBackToPrev} {...props} parsedRecipe={recipe} />
    </div>
  );
};

/** Component will receive prop "recipe" with loading, recipe, and error properties */
const mapStateToProps = ({ recipe }) => ({
  loading: recipe.loading,
  recipe: recipe.recipe,
  error: recipe.error,
});

/** Map action creators loadRecipe to props */
const mapDispatchToProps = (dispatch) => ({
  loadRecipe: (recipeId) => dispatch(loadRecipe(recipeId)),
});

RecipeDetailsContainer.propTypes = {
  recipe: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  loadRecipe: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetailsContainer);
