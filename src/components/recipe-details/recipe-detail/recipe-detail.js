import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Represents a Recipe Detail component getting recipe from container component
 * @param {object} props - Receives recipe details as prop
 */
const RecipeDetail = (props) => {
  if (props.loading) {
    return <h2>Loading recipe...</h2>;
  }
  if (props.parsedRecipe) {
    return (
      <Fragment>
        <div className="recipe-details-img-container">
          <img
            src={props.parsedRecipe.img}
            alt={props.parsedRecipe.recipeName}
            className="recipe-details-img"
          />
          <button className="back-button link" onClick={props.goBack}>
            {'<< '}Back
          </button>
          <Link className="home-button link" to="/categories">
            Home
          </Link>
        </div>
        <div className="recipe-information">
          <h2 className="recipe-title">{props.parsedRecipe.recipeName}</h2>
          <div className="recipe-category">
            <h3>Category:</h3>{' '}
            <Link
              to={`/recipes/${props.parsedRecipe.category}`}
              className="link no-underline"
            >
              {props.parsedRecipe.category}
            </Link>
          </div>
          <div className="recipe-origin">
            <h3>Origin:</h3> {props.parsedRecipe.origin}
          </div>
          <h3 className="subheading">Ingredients</h3>
          <table className="ingredients-table">
            <thead>
              <tr>
                <th />
                <th>Ingredient</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {props.parsedRecipe.ingredients &&
                props.parsedRecipe.ingredients.map((ingredient, index) => (

                  /** Here index is used as key because there is no id for the ingredients 
                   * and some recipes have same ingredient name twice
                   * in the details fetched */
                  <tr key={index}>
                    <td>
                      <img
                        src={`https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`}
                        alt=""
                        className="ingredient-image"
                      />
                    </td>
                    <td>{ingredient.ingredient}</td>
                    <td>{ingredient.quantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <h3 className="subheading">Instructions</h3>
          <p className="recipe-instructions">
            {props.parsedRecipe.instructions}
          </p>
          <h3 className="subheading">Tutorial</h3>
          <iframe
            className="recipe-tutorial"
            title={props.parsedRecipe.recipeName}
            src={props.parsedRecipe.video}
            frameBorder="0"
          />
          <div className="recipe-tags">
            <h3>Tags:</h3>
            {props.parsedRecipe.tags &&
              props.parsedRecipe.tags.map((tag) => (
                <span key={tag} className="Tag">
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
  return <h2>Recipe not found.</h2>;
};

RecipeDetail.propTypes = {
  parsedRecipe: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

export default RecipeDetail;
