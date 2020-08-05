import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

/** Represents app header component with link to categories component */
const header = () => (
  <h1 className="header">
    <Link className="link" to="/categories">
      Dinner Spinner
    </Link>
  </h1>
);

export default header;
