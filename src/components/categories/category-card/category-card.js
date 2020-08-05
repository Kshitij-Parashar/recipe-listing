import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './category-card.css';

/**
 * Represents a Category Card component for individual category
 * @param {object} props - Receives category as prop
 */
const categoryCard = (props) => (
  <div className="recipe-card">
    <img className="card-img" src={props.img} alt={props.categoryName} />
    <div className="card-body">
      <h2 className="card-title">
        <Link
          to={`/recipes/${props.categoryName}`}
          className="link no-underline"
        >
          {props.categoryName}
        </Link>
      </h2>
      <div className="description">
        <p>
          <b>Description: </b>
        </p>
        <p>{props.description}</p>
        <p className="tooltiptext">{props.description}</p>
      </div>
      <Link className="card-link" to={`/recipes/${props.categoryName}`}>
        View Recipes
      </Link>
    </div>
  </div>
);

categoryCard.propTypes = {
  img: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default categoryCard;
