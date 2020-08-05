import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './recipe-list-item.css';

/**
 * Represents a Recipe list item component for individual recipe
 * @param {object} props - Receives recipe as prop 
 */
const recipeListItem = props => (
	<div className="recipe-list-iItem">
		<img src={props.img} className="recipe-list-img" alt={props.recipeName} />
		<div className="recipe-list-body">
			<h3 className="recipe-list-title">
				<Link to={`/recipe-details/${props.id}`} className="link no-underline">
					{props.recipeName}
				</Link>
			</h3>
			<div className="right-align">
				<Link to={`/recipe-details/${props.id}`} className="card-link">
					View Details
				</Link>
			</div>
		</div>
	</div>
);

recipeListItem.propTypes = {
	img: PropTypes.string.isRequired,
	recipeName: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
}

export default recipeListItem;
